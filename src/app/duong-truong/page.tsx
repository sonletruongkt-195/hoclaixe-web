import styles from './page.module.css';

export default function DuongTruongPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Chuyên đề thi sát hạch</span>
          <h1 className={styles.heroTitle}>Kỹ Thuật Thi Đường Trường 2km</h1>
          <p className={styles.heroDesc}>
            Nắm vững checklist các lỗi trừ điểm phổ biến và mẹo xử lý từ chuyên gia để đạt điểm tuyệt đối trong bài thi cuối cùng.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.btnPlay}>
              <span className="material-symbols-outlined">play_circle</span>
              Xem Video Hướng Dẫn
            </button>
            <button className={styles.btnDownload}>
              Tải Checklist PDF
            </button>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.videoCard}>
            <img 
              className={styles.videoImg} 
              alt="Modern car interior" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN-2MUxXz19sFyNLMSrrz_eiL__1QUOeigUrlJwEQ_kALs6kvO6Hnq5SgSeJajMm8A6rHlruVEEPoknpVDh7qRc8KQCsMj-fA7YKio1AqYdkOvRGbpkvh3uzUDQBt7Np2URNrWNvOw1gJCGJ9cWF8MSaPiETc07SLgJBiMyGO0vepHcR6yMBfeAVfbWVijgUWPlotzco5dre5EMUEbvjbCbzSmApVF71cx5rdKIybB0twcOGYUf483pdktkmqn-12yqkKrxh1TWMo" 
            />
            <div className={styles.videoOverlay}>
              <div className={styles.playIconBtn}>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '2.5rem' }}>play_arrow</span>
              </div>
            </div>
          </div>
          {/* Stats Floating Card */}
          <div className={styles.statsFloating}>
            <div className={styles.statsHeader}>
              <div className={styles.statsDot}></div>
              <span className={styles.statsLabel}>Tỷ lệ đỗ</span>
            </div>
            <div className={styles.statsValue}>98.5%</div>
            <p className={styles.statsSub}>Dựa trên 5000+ học viên áp dụng checklist này.</p>
          </div>
        </div>
      </section>

      {/* Bento Grid: Checklist & Content */}
      <section className={styles.bento}>
        {/* Main Checklist Column */}
        <div className={styles.mainColumn}>
          <div className={styles.checklistCard}>
            <div className={styles.checklistHeader}>
              <h2 className={styles.checklistTitle}>Checklist Lỗi Trừ Điểm Thường Gặp</h2>
              <span className={styles.checklistProgress}>4/12 Mục Hoàn Thành</span>
            </div>
            
            <div className={styles.checklistGroup}>
              <h3 className={styles.groupLabel}>I. CHUẨN BỊ &amp; KHỞI HÀNH</h3>
              
              <div className={`${styles.itemWrapper} ${styles.itemHover}`}>
                <div className={styles.checkCircle}>
                  <span className={`material-symbols-outlined ${styles.checkIcon}`}>check</span>
                </div>
                <div className={styles.itemTextWrap}>
                  <span className={styles.itemText}>Không thắt dây an toàn</span>
                  <span className={styles.badgeMinus}>-5đ</span>
                </div>
              </div>
              
              <div className={`${styles.itemWrapper} ${styles.itemChecked}`}>
                <div className={`${styles.checkCircle} ${styles.checkCircleActive}`}>
                  <span className={`material-symbols-outlined ${styles.checkIcon}`}>check</span>
                </div>
                <div className={styles.itemTextWrap}>
                  <span className={styles.itemText}>Không bật xi nhan trái khi xuất phát</span>
                  <span className={styles.badgeMinus}>-5đ</span>
                </div>
              </div>
              
              <div className={`${styles.itemWrapper} ${styles.itemHover}`}>
                <div className={styles.checkCircle}>
                  <span className={`material-symbols-outlined ${styles.checkIcon}`}>check</span>
                </div>
                <div className={styles.itemTextWrap}>
                  <span className={styles.itemText}>Không hạ phanh tay khi khởi hành</span>
                  <span className={styles.badgeMinus}>-5đ</span>
                </div>
              </div>
            </div>

            <div className={styles.checklistGroup}>
              <h3 className={styles.groupLabel}>II. QUÁ TRÌNH DI CHUYỂN</h3>
              
              <div className={`${styles.itemWrapper} ${styles.itemHover}`}>
                <div className={styles.checkCircle}></div>
                <div className={styles.itemTextWrap}>
                  <span className={styles.itemText}>Để xe chết máy (mỗi lần)</span>
                  <span className={styles.badgeMinus}>-5đ</span>
                </div>
              </div>
              
              <div className={`${styles.itemWrapper} ${styles.itemHover}`}>
                <div className={styles.checkCircle}></div>
                <div className={styles.itemTextWrap}>
                  <span className={styles.itemText}>Không tăng số/giảm số đúng yêu cầu</span>
                  <span className={styles.badgeMinus}>-5đ</span>
                </div>
              </div>
              
              <div className={`${styles.itemWrapper} ${styles.itemHover}`}>
                <div className={styles.checkCircle}></div>
                <div className={styles.itemTextWrap}>
                  <span className={styles.itemText}>Vi phạm quy tắc giao thông (vượt đèn, sai làn)</span>
                  <span className={styles.badgeFatal}>Truất quyền</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Side Sidebar: Tips & Support */}
        <div className={styles.sideColumn}>
          {/* Pro Tips Card */}
          <div className={styles.tipsCard}>
            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', marginBottom: '1rem', fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
            <h3>Mẹo Xử Lý Thực Tế</h3>
            <ul className={styles.tipsList}>
              <li>
                <span className="material-symbols-outlined">check_circle</span>
                Luôn lắng nghe lệnh từ thiết bị (hoặc giám khảo) trước khi thao tác.
              </li>
              <li>
                <span className="material-symbols-outlined">check_circle</span>
                Khi tăng số, thả hết côn trước khi đạp thêm ga tránh giật.
              </li>
              <li>
                <span className="material-symbols-outlined">check_circle</span>
                Duy trì tốc độ ổn định 20-30km/h nếu không có lệnh tăng tốc.
              </li>
            </ul>
            <div className={styles.tipGlow}></div>
          </div>

          {/* Instructor Card */}
          <div className={styles.instructorCard}>
            <h4 className={styles.instructorLabel}>Giảng viên hướng dẫn</h4>
            <div className={styles.instructorProfile}>
              <div className={styles.instructorAvatar}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-9b1SLkhNa5qp0bVmKX0vWDb7nkQ_lDU6mYxw88dteSi34AkwlZR2AH74u5_9OCfpd3FrUqUxRnNB_NQT4R6VCHdxGmWV9HNN9p8neYR7yawKaclb5O9d6JC8Hp9hzIdkxWBIV9e3neeoOnuLxT0dLwh_WbWPDIuxDz3OJlxaKRhClVLAuEoai1YCwmCOC0Uj1nD-op77r4fREbwvUzlDfXqJsH4ZZJQ_dYFD7NH61aqo4kHLl7nbcT41cIYpwEZq375ljHyVE90" alt="Teacher" />
              </div>
              <div>
                <div className={styles.instructorName}>Thầy Hoàng Minh</div>
                <div className={styles.instructorExp}>15 năm kinh nghiệm sát hạch</div>
              </div>
            </div>
            <button className={styles.btnOutline}>
              Đặt lịch bổ túc tay lái
            </button>
          </div>

          {/* Resource Link */}
          <div className={styles.resourceCard}>
            <h4 className={styles.resourceTitle}>Tài liệu liên quan</h4>
            <a href="/sa-hinh" className={styles.linkItem}>
              <span className={styles.linkText}>11 Bài thi sa hình</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </a>
            <a href="/ly-thuyet" className={styles.linkItem}>
              <span className={styles.linkText}>Mẹo thi lý thuyết 600 câu</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Tutorial Section */}
      <section className={styles.videoSection}>
        <h2 className={styles.videoSectionTitle}>Video Hướng Dẫn Chi Tiết Thao Tác</h2>
        <div className={styles.videoGrid}>
          
          <div className={styles.videoItem}>
            <div className={styles.vidThumb}>
              <img alt="vid1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMJ1d9DqLe6EcJPcaZnsOHOeO4fw61zJjbaKugl-hQdQGiF_mY03asEAsXWGioNkRAfQ40FHXRzkMQXn6-5HAW7KsdjirQuqdWzNAee8IutfSLOLxIHKr6fu6O94IhwRHabIEqc7pTGBscNJJVhDhjmwNnnCMRalynUAVNQquloX0ZLYWpELXQUC6rmJNXqlDUSnYk25Ng_Q1vF3tK9TPdSBKhPl3TA2rj_X2bjFWvJUFqOzmg_olNJGB52fvEzSiEuWhFoBVGvlw" />
              <div className={styles.vidOverlay}>
                <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#fff' }}>play_circle</span>
              </div>
              <div className={styles.vidDuration}>04:20</div>
            </div>
            <h3 className={styles.vidTitle}>Kỹ thuật tăng/giảm số êm ái</h3>
            <p className={styles.vidDesc}>Hướng dẫn phối hợp nhịp nhàng giữa chân côn, chân ga và cần số.</p>
          </div>
          
          <div className={styles.videoItem}>
            <div className={styles.vidThumb}>
              <img alt="vid2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASNu05b1afiuZ_Zvno0-lk4Ywd49MS8DqSuFt6uJ9IiblkD9VMa4SJSCqIub-3myL7f7qNS5fxNgnu7qKxr-m-eSpJwsfgVo4jIQpgY0i4ngsfAWod2ZbirnqO_YaLH8hSP0wzQgzHUAeGfrklRIWae35jJqWatq3iOxhm_LgmoPMCFY2XPE89oOMPB4_GMyz5jazPlui9BfF_yHLh9fjN8YMQEJ2ITrAFBFII-KzFJoRqKsEVHPur-SjnonTlGPiDaYlh0GdyYTs" />
              <div className={styles.vidOverlay}>
                <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#fff' }}>play_circle</span>
              </div>
              <div className={styles.vidDuration}>06:15</div>
            </div>
            <h3 className={styles.vidTitle}>Quy trình xuất phát &amp; Kết thúc</h3>
            <p className={styles.vidDesc}>Chi tiết các bước từ khi bước lên xe cho đến khi trả xe cho giám khảo.</p>
          </div>
          
          <div className={styles.videoItem}>
            <div className={styles.vidThumb}>
              <img alt="vid3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3suz4VWQRw5uXS0iN7AY8ZpRX5PuRxppzkpiFE_MjCB12WqBCgqOVv8f3yDOQmt8ewIpaX9wJaUlEiGX2h2yGcWg1-SrmetaFcLlKuLZGoVy2xMXPe2WWn6dAmJXpgn_oHYA8n-9po_X8wPuKlzlp9yKmtaSuv6PoLCWSOOhzofyXzjkoGM6PBrK0N4eZvHN8N_Lw4LpA0NlH_cHi-bl_VyPJsLm6Z4P-GO9oaPxKaWIUuAHKcLvykC8OHQMzwLT1XFj9OkupQzA" />
              <div className={styles.vidOverlay}>
                <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#fff' }}>play_circle</span>
              </div>
              <div className={styles.vidDuration}>05:45</div>
            </div>
            <h3 className={styles.vidTitle}>Xử lý tình huống nguy hiểm</h3>
            <p className={styles.vidDesc}>Cách phanh khẩn cấp và quan sát gương chiếu hậu khi gặp chướng ngại vật.</p>
          </div>

        </div>
      </section>

    </main>
  );
}
