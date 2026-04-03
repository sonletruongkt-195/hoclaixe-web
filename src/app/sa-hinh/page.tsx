import styles from './page.module.css';
import Link from 'next/link';

export default function SaHinhPage() {
  return (
    <main className={styles.page}>
      
      {/* Header Section */}
      <header className={styles.headerWrapper}>
        <div className={styles.headerInner}>
          <div>
            <span className={styles.tagline}>Học lái xe hạng B2</span>
            <h1 className={`${styles.textHeadline} ${styles.titleMain}`}>Sa hình Thực Tế</h1>
            <p className={styles.titleDesc}>
              Khám phá chi tiết 11 bài thi sa hình với góc nhìn thực tế, sơ đồ chạy xe chuẩn xác và hệ thống cảnh báo lỗi tự động.
            </p>
          </div>
          <div>
            <div className={styles.statBadge}>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '1.25rem' }}>analytics</span>
              <span>Tỉ lệ đạt: 85%</span>
            </div>
          </div>
        </div>
      </header>

      {/* Top Section: Video & Sidebar List */}
      <div className={styles.topGrid}>
        
        <div className={styles.videoContainer}>
          <img 
            className={styles.videoImg}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPNOcp8M7wh0FXsRsMttqwEdPHBs49dxl8nHDGvCNqeCLSZROFPYA_zTgHua-q83IQQscQQzG4jvFekpK0UHQwkt_JJcz-JxtW4jT0SYYTlOstKbbRofURHxxVNcijD-ngVHOcUXM_trAfTSU5N38Ph_SlmdeyjCsOoDjvXLX8M0sBzyqivWnjqN7wN8u8t7sdiZ5asmcK-jKG1r4mzWVM0WcU03hZ5-GoiMnFz67RWeaCWr8P6OGjVynBc6xyXbgVRRVmZEK9nw0" 
            alt="3D driving simulator map view" 
          />
          <div className={styles.videoOverlay}></div>
          <div className={styles.videoText}>
            <h3 className={`${styles.textHeadline} ${styles.videoTitle}`}>Video thực tế từ sân thi</h3>
            <p className={styles.videoSub}>Xem thực tế trực quan</p>
          </div>
          
          <button className={styles.playBtn}>
            <span className="material-symbols-outlined" style={{ fontSize: '2rem', fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
          </button>
        </div>

        <aside>
          <div className={`${styles.sidebar} ${styles.ambientShadow}`}>
            <h3 className={`${styles.textHeadline} ${styles.sidebarTitle}`}>
              <span className="material-symbols-outlined text-primary">format_list_numbered</span>
              Sơ đồ 11 bài thi sa hình
            </h3>
            
            <div className={styles.sidebarScroll}>
              <div className={`${styles.stepItem} ${styles.stepItemActive}`}>
                <div className={styles.stepLeft}>
                  <span className={styles.stepNum}>01</span>
                  <span className={styles.stepText}>Xuất phát</span>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>check_circle</span>
              </div>
              
              <div className={styles.stepItem}>
                <div className={styles.stepLeft}>
                  <span className={styles.stepNum}>02</span>
                  <span className={styles.stepText}>Dừng xe nhường đường</span>
                </div>
                <span className={`material-symbols-outlined ${styles.stepChevron}`}>chevron_right</span>
              </div>
              
              <div className={styles.stepItem}>
                <div className={styles.stepLeft}>
                  <span className={styles.stepNum}>03</span>
                  <span className={styles.stepText}>Dừng xe khởi hành ngang dốc</span>
                </div>
                <span className={`material-symbols-outlined ${styles.stepChevron}`}>chevron_right</span>
              </div>
              
              <div className={styles.stepItem}>
                <div className={styles.stepLeft}>
                  <span className={styles.stepNum}>04</span>
                  <span className={styles.stepText}>Vệt bánh xe &amp; Đường hẹp</span>
                </div>
                <span className={`material-symbols-outlined ${styles.stepChevron}`}>chevron_right</span>
              </div>
              
              <div className={styles.stepItem}>
                <div className={styles.stepLeft}>
                  <span className={styles.stepNum}>05</span>
                  <span className={styles.stepText}>Ngã tư tín hiệu giao thông</span>
                </div>
                <span className={`material-symbols-outlined ${styles.stepChevron}`}>chevron_right</span>
              </div>
              
              <div className={styles.stepItem}>
                <div className={styles.stepLeft}>
                  <span className={styles.stepNum}>06</span>
                  <span className={styles.stepText}>Đường vòng quanh co</span>
                </div>
                <span className={`material-symbols-outlined ${styles.stepChevron}`}>chevron_right</span>
              </div>
              
              <div className={styles.stepItem}>
                <div className={styles.stepLeft}>
                  <span className={styles.stepNum}>07</span>
                  <span className={styles.stepText}>Ghép xe dọc</span>
                </div>
                <span className={`material-symbols-outlined ${styles.stepChevron}`}>chevron_right</span>
              </div>
            </div>
            
            <button className={styles.btnExpand}>
              Mở rộng danh sách
            </button>
          </div>
        </aside>
        
      </div>

      {/* Bottom Section: Detail Steps & Scoring Faults */}
      <div className={styles.bottomGrid}>
        
        <section className={styles.detailCol}>
          <h2 className={`${styles.textHeadline} ${styles.detailHeader}`}>Chi tiết bài thi: Xuất phát</h2>
          <div className={styles.detailCard}>
            <h3 className={`${styles.textHeadline} ${styles.detailSubHead}`}>
              <span className={styles.subHeadIcon}>1</span>
              Các bước thực hiện
            </h3>
            
            <ul className={styles.actionList}>
              <li className={styles.actionRow}>
                <div className={styles.actionDotOuter}>
                  <div className={styles.actionDotInner}></div>
                </div>
                <div>
                  <p className={styles.actionTitle}>Chuẩn bị</p>
                  <p className={styles.actionDesc}>Kiểm tra ghế lái, gương, thắt dây an toàn và để số 0. Bật xi nhan trái khi có lệnh xuất phát.</p>
                </div>
              </li>
              
              <li className={styles.actionRow}>
                <div className={styles.actionDotOuter}>
                  <div className={styles.actionDotInner}></div>
                </div>
                <div>
                  <p className={styles.actionTitle}>Khởi hành</p>
                  <p className={styles.actionDesc}>Nhả phanh tay, vào số 1, từ từ nhả côn để xe chuyển động. Nghe tiếng &quot;Bính bong&quot; thì tắt xi nhan.</p>
                </div>
              </li>
              
              <li className={styles.actionRowLight}>
                <div className={styles.actionDotOuterLight}></div>
                <div>
                  <p className={styles.actionTitle}>Tiếp tục</p>
                  <p className={styles.actionDesc}>Tăng tốc nhẹ nhàng và chuẩn bị cho bài thi dừng xe nhường đường cho người đi bộ.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <aside className={styles.errorCol}>
          <div className={styles.errorCard}>
            <h3 className={`${styles.textHeadline} ${styles.errorTitle}`}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>rule</span>
              Lỗi bị trừ điểm
            </h3>
            
            <div className={styles.errorList}>
              <div className={styles.faultItem}>
                <span className={styles.faultScore}>-5đ</span>
                <p className={styles.faultDesc}>Không thắt dây an toàn hoặc không bật xi nhan trái khi xuất phát.</p>
              </div>
              
              <div className={styles.faultItem}>
                <span className={styles.faultScore}>-5đ</span>
                <p className={styles.faultDesc}>Không tắt xi nhan sau khi xe đã đi qua vạch xuất phát 5m.</p>
              </div>
              
              <div className={styles.faultItem}>
                <span className={styles.faultScore}>-5đ</span>
                <p className={styles.faultDesc}>Để xe chết máy mỗi lần hoặc không xuất phát được sau 20 giây.</p>
              </div>
              
              <div className={styles.faultItemFatal}>
                <span className={styles.faultScoreFatal}>LOẠI</span>
                <p className={styles.faultDescFatal}>Quá 30 giây mà xe vẫn chưa vượt qua vạch xuất phát.</p>
              </div>
            </div>
            
          </div>
        </aside>
        
      </div>

    </main>
  );
}
