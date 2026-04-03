'use server';

import { createClient } from '@/utils/supabase/server';

export async function submitExamResult(result: {
  score: number;
  total_questions: number;
  is_passed: boolean;
  time_taken_seconds: number;
}) {
  const supabase = await createClient();

  // Xác thực người dùng hiện tại
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: 'Chưa đăng nhập' };
  }

  // Insert kết quả vào Database
  const { error } = await supabase
    .from('exam_histories')
    .insert({
      user_id: user.id,
      score: result.score,
      total_questions: result.total_questions,
      is_passed: result.is_passed,
      time_taken_seconds: result.time_taken_seconds
    });

  if (error) {
    console.error('Error inserting exam history:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
