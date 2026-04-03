'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import styles from './page.module.css';
import { submitExamResult } from './actions';

// Mock Data for "Thi Thử A1"
const mockQuestions = [
  {
    id: 1,
    text: 'Khái niệm "đường bộ" được hiểu như thế nào là đúng?',
    options: ['Đường, cầu đường bộ', 'Hầm đường bộ, bến phà đường bộ', 'Tất cả các ý trên'],
    correctIndex: 2
  },
  {
    id: 2,
    text: 'Khi đang lái xe mô tô, người lái xe có được sử dụng ô (dù) không?',
    options: ['Được sử dụng nếu trời đang mưa to', 'Không được sử dụng', 'Chỉ được sử dụng khi đi với tốc độ chậm'],
    correctIndex: 1
  },
  {
    id: 3,
    text: 'Biển nào báo hiệu giao nhau với đường sắt có rào chắn?',
    options: ['Biển 1 (Hình con tàu)', 'Biển 2 (Hình rào chắn)', 'Biển 3 (Hình dấu X)'],
    correctIndex: 1
  },
  {
    id: 4,
    text: 'Trên đường cao tốc, người lái xe phải dừng đỗ xe như thế nào?',
    options: ['Dừng đỗ ở bất cứ đâu nếu mép đường rộng', 'Chỉ được dừng đỗ ở nơi quy định (trạm dừng nghỉ)', 'Được dừng đỗ trên làn dừng khẩn cấp để hút thuốc'],
    correctIndex: 1
  },
  {
    id: 5,
    text: 'Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người lái xe phải nhường đường như thế nào?',
    options: ['Nhường đường cho xe đi đến từ bên trái', 'Nhường đường cho xe đi đến từ bên phải', 'Nhường đường cho xe đi thẳng'],
    correctIndex: 1
  }
];

export default function ThiThuPage() {
  const router = useRouter();
  
  // States
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(19 * 60); // 19 minutes in seconds
  const [isFinished, setIsFinished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: mockQuestions.length, passed: false });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Check Auth
  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setIsAuthenticated(!!user);
    };
    checkAuth();
  }, []);

  // Timer Countdown
  useEffect(() => {
    if (isAuthenticated === false || isAuthenticated === null) return;
    if (isFinished || timeLeft <= 0) {
      if (timeLeft <= 0 && !isFinished) handleFinish();
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isFinished, isAuthenticated]);

  const handleSelectOption = (optIndex: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: optIndex }));
  };

  const handleNext = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleFinish = async () => {
    setIsSubmitting(true);
    
    // Evaluate Score
    let correctCount = 0;
    mockQuestions.forEach((q, idx) => {
      if (answers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const passed = correctCount >= 4; // Mini test: require 4/5 (80%). Real A1 is 21/25.
    setScore({ correct: correctCount, total: mockQuestions.length, passed });
    
    // Send to Supabase via Server Action
    const timeTaken = (19 * 60) - timeLeft;
    const res = await submitExamResult({
      score: correctCount,
      total_questions: mockQuestions.length,
      is_passed: passed,
      time_taken_seconds: timeTaken > 0 ? timeTaken : 1
    });

    if (!res.success) {
      alert(`Lỗi lưu điểm: ${res.error}. Đảm bảo bạn đã Đăng nhập bằng Google!`);
    }

    setIsFinished(true);
    setIsSubmitting(false);
  };

  // Render Result Screen
  if (isFinished) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.resultCard}>
            <h1 className={styles.resultTitle}>Kết quả thi thử A1</h1>
            <div className={`${styles.resultScore} ${score.passed ? styles.resultPassed : styles.resultFailed}`}>
              {score.correct}/{score.total}
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: score.passed ? 'var(--color-tertiary)' : 'var(--color-error)' }}>
              {score.passed ? '🎉 CHÚC MỪNG BẠN ĐÃ ĐỖ' : '❌ RẤT TIẾC BẠN CHƯA ĐẠT'}
            </h2>
            <p>Điểm của bạn đã được ghi nhận vào hệ thống đám mây Supabase.</p>
            
            <div className={styles.resultActions}>
              <button 
                className="btn btn-ghost" 
                onClick={() => router.push('/ly-thuyet')}
              >
                Về phần ôn tập
              </button>
              <button 
                className="btn btn-primary" 
                onClick={() => router.push('/dashboard')}
              >
                Mở Dashboard xem lịch sử
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Gate Screen
  if (isAuthenticated === null) {
    return <div className={styles.page}><div className="container" style={{ textAlign: 'center', padding: '5rem' }}>Đang tải máy chủ thi...</div></div>;
  }

  if (isAuthenticated === false) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.resultCard}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
            <h1 className={styles.resultTitle}>Vui lòng Đăng nhập</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--color-on-surface-variant)' }}>
              Bạn cần phải đăng nhập bằng hệ thống Google để có thể bắt đầu làm bài thi thử môn Lý thuyết.
              Điều này giúp chúng tôi tự động chấm điểm và lưu vào hồ sơ bảng điểm Dashboard cá nhân của bạn một cách chính xác.
            </p>
            <div className={styles.resultActions}>
              <button 
                className="btn btn-primary" 
                onClick={() => router.push('/login')}
                style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
              >
                Đăng nhập ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Question Screen
  const q = mockQuestions[currentQuestion];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={styles.page}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.title}>Đề Thi Thử Hạng A1 (Mini)</div>
          <div className={styles.timer}>
            ⏱ {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Question Board */}
        <div className={styles.questionCard}>
          <h2 className={styles.questionText}>
            Câu {currentQuestion + 1}: {q.text}
          </h2>
          <div className={styles.options}>
            {q.options.map((opt, idx) => (
              <div 
                key={idx} 
                className={`${styles.option} ${answers[currentQuestion] === idx ? styles.optionSelected : ''}`}
                onClick={() => handleSelectOption(idx)}
              >
                <input 
                  type="radio" 
                  checked={answers[currentQuestion] === idx} 
                  readOnly 
                  style={{ transform: 'scale(1.2)', cursor: 'pointer' }}
                />
                <span className={styles.optionText}>{opt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className={styles.footer}>
          <button 
            className="btn btn-ghost" 
            onClick={handlePrev} 
            disabled={currentQuestion === 0}
          >
            &larr; Câu trước
          </button>

          <span className={styles.progress}>
            {currentQuestion + 1} / {mockQuestions.length}
          </span>

          {currentQuestion === mockQuestions.length - 1 ? (
            <button 
              className="btn btn-primary" 
              onClick={handleFinish}
              disabled={isSubmitting || answers[currentQuestion] === undefined}
            >
              {isSubmitting ? 'Đang nộp...' : 'Nộp bài & Kết thúc'}
            </button>
          ) : (
            <button 
              className="btn btn-primary" 
              onClick={handleNext}
            >
              Câu tiếp &rarr;
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
