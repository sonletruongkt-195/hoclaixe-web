import styles from './page.module.css';

export default function ProviderDetailPage({ params }: { params: { id: string } }) {
  // Normally fetch data from database using params.id
  // This is the implementation matching the "Instructor Profile & Booking Details" design from Stitch.
  
  return (
    <main className={styles.page}>
      
      {/* Hero Section: Intentional Asymmetry */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span className={styles.verificationBadge}>
              <span className="material-symbols-outlined" style={{ fontSize: '0.875rem', fontVariationSettings: "'FILL' 1" }}>verified</span>
              GIẢNG VIÊN XÁC MINH
            </span>
            <span className={styles.heroMeta}>Thành viên từ 2021</span>
          </div>
          
          <h1 className={`${styles.fontHeadline} ${styles.heroTitle}`}>Thầy Nguyễn Minh Trí</h1>
          <p className={styles.heroDesc}>
            Chuyên gia đào tạo lái xe với hơn 10 năm kinh nghiệm. Phương pháp dạy hiện đại, tập trung vào kỹ năng xử lý tình huống thực tế và tâm lý lái xe an toàn cho học viên mới.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={`${styles.statValue} ${styles.statValuePrimary}`}>1,200+</span>
              <span className={styles.statLabel}>Giờ giảng dạy</span>
            </div>
            <div className={styles.statItem}>
              <span className={`${styles.statValue} ${styles.statValueSecondary}`}>100+</span>
              <span className={styles.statLabel}>Học viên đỗ</span>
            </div>
            <div className={styles.statItem}>
              <span className={`${styles.statValue} ${styles.statValueTertiary}`}>12 Năm</span>
              <span className={styles.statLabel}>Kinh nghiệm</span>
            </div>
          </div>

          <div className={styles.heroActions}>
            <button className={`${styles.btnPrimary} ${styles.ambientShadow}`}>Đặt Lịch Thử Ngay</button>
            <button className={styles.btnSecondary}>Xem Video Giảng Dạy</button>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={`${styles.imageWrapper} ${styles.ambientShadow}`}>
            <img 
              className={styles.imageObj} 
              alt="Instructor Profile" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkcy4IN1V1Tt-IqBidwqt1DB77XcZGFUJp_B5-auWVdFf9ynNWzbYW7GJGhucJcNpV_5zBRMkkfLhbEbXJmc3mWfFK5YudTUmz_o1WU6blm_gL5qctwR9n2N3NTldv-lWfCEaRBRq2CBY_atylm9_5AxogK1TkLTY_ajZ2zceXeMVH2woCIfI3vEs2aOYg_xJC871SkoWwUnYOe35LmincXdykac4fDYZhAIVNvopRGYZywmwsL08n483F_LVFF0A87LaafIJYdLI"
            />
          </div>
          {/* Decorative elements */}
          <div className={styles.decoSquare}></div>
          <div className={styles.decoCircle}></div>
        </div>
      </section>

      {/* Services Section: Bento Grid Layout */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.labelTag}>Dịch Vụ</span>
            <h2 className={`${styles.fontHeadline} ${styles.sectionTitle}`}>Chương Trình Đào Tạo</h2>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          
          {/* Basic Card */}
          <div className={`${styles.serviceCardBasic} ${styles.ambientShadow}`}>
            <span className={`material-symbols-outlined ${styles.cardIconPrimary}`}>directions_car</span>
            <h3 className={`${styles.fontHeadline} ${styles.cardTitle}`}>Hạng B2 Cơ Bản</h3>
            <p className={styles.cardDescBasic}>Phù hợp cho người mới bắt đầu. Gồm 20 giờ học thực hành và lý thuyết.</p>
            
            <ul className={styles.cardList}>
              <li className={styles.cardListItem}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Học xe số sàn đời mới
              </li>
              <li className={styles.cardListItem}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Tài liệu 600 câu hỏi
              </li>
              <li className={styles.cardListItem}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Cam kết đầu ra
              </li>
            </ul>

            <div className={`${styles.fontHeadline} ${styles.cardPriceBasic}`}>12.500.000đ</div>
            <button className={styles.cardBtnBasic}>Đăng Ký Khóa Học</button>
          </div>

          {/* Pro Card */}
          <div className={styles.serviceCardPro}>
            <div className={styles.popBadge}>PHỔ BIẾN NHẤT</div>
            <span className={`material-symbols-outlined ${styles.cardIconPro}`}>workspace_premium</span>
            <h3 className={`${styles.fontHeadline} ${styles.cardTitle}`}>Hạng B2 Pro</h3>
            <p className={styles.cardDescPro}>Học không giới hạn giờ cho đến khi lấy bằng. Tặng thêm 5 giờ đường trường.</p>
            
            <ul className={styles.cardList}>
              <li className={styles.cardListItem}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary-fixed)', fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Đưa đón tận nơi
              </li>
              <li className={styles.cardListItem}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary-fixed)', fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Học ngoài giờ & Cuối tuần
              </li>
              <li className={styles.cardListItem}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary-fixed)', fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Bảo hiểm học viên
              </li>
            </ul>

            <div className={`${styles.fontHeadline} ${styles.cardPricePro}`}>15.900.000đ</div>
            <button className={styles.cardBtnPro}>Đăng Ký Ngay</button>
          </div>

          {/* Chip Card */}
          <div className={`${styles.serviceCardChip} ${styles.ambientShadow}`}>
            <span className={`material-symbols-outlined ${styles.cardIconTertiary}`}>memory</span>
            <h3 className={`${styles.fontHeadline} ${styles.cardTitle}`}>Thuê Xe Chip</h3>
            <p className={styles.cardDescBasic}>Bổ túc tay lái trực tiếp trên xe gắn chip cảm biến của sân thi.</p>
            
            <ul className={styles.cardList}>
              <li className={styles.cardListItem}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Chấm điểm tự động
              </li>
              <li className={styles.cardListItem}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Giáo viên kèm riêng
              </li>
              <li className={styles.cardListItem}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Sân thi đạt chuẩn
              </li>
            </ul>

            <div className={`${styles.fontHeadline} ${styles.cardPriceTertiary}`}>
              450.000đ <span className={styles.cardPriceSuffix}>/giờ</span>
            </div>
            <button className={styles.cardBtnTertiary}>Đặt Lịch Thuê</button>
          </div>

        </div>
      </section>

      {/* Booking & Reviews Section */}
      <section className={styles.bookingReviewSection}>
        
        {/* Booking & Calendar col */}
        <div className={styles.bookingCol}>
          <div className={styles.bookingCard}>
            <h2 className={`${styles.fontHeadline} ${styles.bookingBlockTitle}`}>Lịch Trống & Đặt Chỗ</h2>
            
            <div className={`${styles.calendarWidget} ${styles.ambientShadow}`}>
              <div className={styles.calHeader}>
                <span className={styles.calMonth}>Tháng 12, 2024</span>
                <div className={styles.calNav}>
                  <button className={styles.calBtn}><span className="material-symbols-outlined">chevron_left</span></button>
                  <button className={styles.calBtn}><span className="material-symbols-outlined">chevron_right</span></button>
                </div>
              </div>

              <div className={styles.calGridDays}>
                <span className={styles.calDayLbl}>T2</span>
                <span className={styles.calDayLbl}>T3</span>
                <span className={styles.calDayLbl}>T4</span>
                <span className={styles.calDayLbl}>T5</span>
                <span className={styles.calDayLbl}>T6</span>
                <span className={`${styles.calDayLbl} ${styles.calDayLblWeekend}`}>T7</span>
                <span className={`${styles.calDayLbl} ${styles.calDayLblWeekend}`}>CN</span>
              </div>
              <div className={styles.calGridDates}>
                <button className={`${styles.calDate} ${styles.calDateDisable}`}>28</button>
                <button className={`${styles.calDate} ${styles.calDateDisable}`}>29</button>
                <button className={`${styles.calDate} ${styles.calDateDisable}`}>30</button>
                <button className={`${styles.calDate} ${styles.calDateHover}`}>1</button>
                <button className={`${styles.calDate} ${styles.calDateSelect}`}>2</button>
                <button className={`${styles.calDate} ${styles.calDateHover}`}>3</button>
                <button className={`${styles.calDate} ${styles.calDateHover}`}>4</button>
                <button className={`${styles.calDate} ${styles.calDateActive}`}>5</button>
                <button className={`${styles.calDate} ${styles.calDateHover}`}>6</button>
                <button className={`${styles.calDate} ${styles.calDateHover}`}>7</button>
                <button className={`${styles.calDate} ${styles.calDateHover}`}>8</button>
                <button className={`${styles.calDate} ${styles.calDateSelect}`}>9</button>
                <button className={`${styles.calDate} ${styles.calDateHover}`}>10</button>
                <button className={`${styles.calDate} ${styles.calDateHover}`}>11</button>
              </div>
            </div>

            <form>
              <div className={styles.formGroup}>
                <div className={styles.formRow}>
                  <div>
                    <label className={styles.inputLabel}>Họ và Tên</label>
                    <input className={styles.inputField} placeholder="Nguyễn Văn A" type="text" />
                  </div>
                  <div>
                    <label className={styles.inputLabel}>Số Điện Thoại</label>
                    <input className={styles.inputField} placeholder="090x xxx xxx" type="tel" />
                  </div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>Lời Nhắn (Tùy chọn)</label>
                <textarea className={styles.inputField} placeholder="Em muốn đăng ký học thử..." rows={3}></textarea>
              </div>
              <button className={`${styles.btnSubmitForm} ${styles.ambientShadow}`}>Gửi Yêu Cầu Tư Vấn</button>
            </form>
          </div>
        </div>

        {/* Reviews Col */}
        <div className={styles.reviewsCol}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span className={styles.labelTag}>Đánh Giá</span>
            <h2 className={`${styles.fontHeadline} ${styles.sectionTitle}`}>Phản Hồi Học Viên</h2>
          </div>

          <div className={styles.reviewItem}>
            <div className={styles.stars}>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className={styles.reviewText}>
              &quot;Thầy Trí dạy rất kỹ, nhất là các bài lùi chuồng và ghép ngang. Nhờ thầy mà mình đã đỗ ngay từ lần thi đầu tiên với điểm số tuyệt đối 100/100.&quot;
            </p>
            <div className={styles.reviewerBox}>
              <div className={styles.reviewerAvatar}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJVUuryMYUCQyPRL0d7LW_F26bAKVEZwUKoNPpniMvYUPgOJCHFqqzHEqra84PnZDekxPS0BAbnXRQnw7ft6bIkSpYSxnP3xyfpgYUq0Zka94n1czi0r0j1cgloTy7Xt5kgkxBXQwoAPZ2dW6xLte8yhzUq_D4rRe_n8N3pFQreS3clK8a7_zxmgVETyyk_D5lUFOfBAcFJ_sIS4VVO9eRrMKueANx5RtN8lxoxm_zzw6kFZMnaVAI7B0GzpZr88eb9ilRNEKBJE0" alt="Học viên" />
              </div>
              <div>
                <div className={styles.reviewerName}>Trần Thu Hà</div>
                <div className={styles.reviewerSub}>Khóa B2 Pro, Tháng 10/2023</div>
              </div>
            </div>
          </div>

          <div className={styles.reviewItem}>
            <div className={styles.stars}>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className={styles.reviewText}>
              &quot;Phương pháp của thầy rất dễ hiểu, không gây áp lực. Đặc biệt là những buổi học đường trường giúp mình tự tin hơn hẳn khi lái xe thực tế.&quot;
            </p>
            <div className={styles.reviewerBox}>
              <div className={styles.reviewerAvatar}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTOPM1WOMsbr45F3QxoFJZ4eqxYdjNROIs7_YSHb657MLhQM_lh3msJmpDFurAYtEgjP8M0-KdF3YSEXdnNSKdBhG_AJBdp5P4LRFanAQ-FJ2Ew0suN4OTViHJ51IsK2PhblHcqdmuX-2Lq7sPOjACx1kPwniMceVLYs39Yuk8YCU0Yvb5KUlAuezjrSfOLQyPDO3dymzX0KZ7SqxFoJRl3PqILWBqA1H77hD8CKYy19HB0BlC2Ex9LMTalL9itHEwBsWkMj3FzL8" alt="Học viên" />
              </div>
              <div>
                <div className={styles.reviewerName}>Lê Hoàng Nam</div>
                <div className={styles.reviewerSub}>Khóa B2 Cơ Bản, Tháng 08/2023</div>
              </div>
            </div>
          </div>

          <button className={styles.moreReviewBtn}>
            Xem thêm 124 đánh giá khác
            <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>arrow_forward</span>
          </button>
        </div>

      </section>

      {/* CTA Bottom Section */}
      <section className={styles.btmCta}>
        <div className={styles.btmCtaOverlay}></div>
        <h2 className={`${styles.fontHeadline} ${styles.ctaTitle}`}>Sẵn sàng bắt đầu hành trình của bạn?</h2>
        <p className={styles.ctaDesc}>Gia nhập cộng đồng 100+ học viên đã vượt qua kỳ thi sát hạch thành công cùng Thầy Trí ngay hôm nay.</p>
        <div className={styles.ctaActions}>
          <button className={`${styles.ctaBtn1} ${styles.ambientShadow}`}>Đăng Ký Tư Vấn Miễn Phí</button>
          <button className={styles.ctaBtn2}>Gọi 090 123 4567</button>
        </div>
      </section>

    </main>
  );
}
