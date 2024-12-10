// Home.jsx
import pic1 from "../../assets/nam-nu.jpg";
import pic2 from "../../assets/xeploai-gioitinh.jpg";
import pic3 from "../../assets/khoahoc.jpg";
import pic4 from "../../assets/khoahoc-xeploai.jpg";
import pic5 from "../../assets/hocluc.jpg";
import pic6 from "../../assets/tong.png";
import pic7 from "../../assets/cot.png";
import "./Home.css";

const Home = () => {
	const arr = [
		{
			img: pic1,
			title: "Tỉ lệ nam nữ",
			des: "Biểu đồ thể hiện sự phân bố giới tính với: Nam giới chiếm đa số với <span class='highlight'>86.22%</span>, nữ giới chiếm thiểu số với <span class='highlight'>13.78%</span>. Có sự chênh lệch rất lớn giữa tỉ lệ nam và nữ, với nam giới chiếm gần <span class='highlight'>7</span> lần so với nữ giới.",
		},
		{
			img: pic2,
			title: "Xếp loại theo giới tính",
			des: `Biểu đồ cột này thể hiện số lượng cụ thể của nam và nữ theo từng xếp loại học tập, cho chúng ta một góc nhìn chi tiết và trực quan hơn về sự phân bố.
            <br/><br/>
            Ở mức xếp loại khá, số lượng nam giới đạt khoảng <span class='highlight'>900</span> người, trong khi nữ giới chỉ có khoảng <span class='highlight'>150</span> người. Đây là mức xếp loại có số lượng sinh viên đông đảo nhất, cho thấy đa số sinh viên đạt được thành tích học tập ở mức độ này.
            <br/><br/>
            Đối với xếp loại giỏi, số lượng nam giới vào khoảng <span class='highlight'>320</span> người và nữ giới khoảng <span class='highlight'>50</span> người. Con số này giảm đáng kể so với mức khá, phản ánh độ khó tăng cao trong việc đạt được thành tích này.
            <br/><br/>
            Ở mức trung bình khá, nam giới có khoảng <span class='highlight'>240</span> người và nữ giới chỉ khoảng <span class='highlight'>15</span> người.`,
		},
		{
			img: pic3,
			title: "Tỉ lệ theo khóa học",
			des: `Số liệu từ biểu đồ cho thấy một diễn biến khá thú vị về quy mô các khóa học. Khóa 8 đang dẫn đầu với <span class='highlight'>548</span> sinh viên, chiếm gần một phần ba tổng số sinh viên toàn trường. Khóa 9 cũng không kém cạnh với <span class='highlight'>507</span> sinh viên, chỉ ít hơn Khóa 8 khoảng <span class='highlight'>40</span> sinh viên.
            <br/><br/>
            Đến Khóa 10, số lượng sinh viên đã giảm xuống còn <span class='highlight'>457</span> người. Sự sụt giảm này càng rõ rệt hơn ở Khóa 11 khi chỉ còn <span class='highlight'>259</span> sinh viên - một con số khá khiêm tốn so với các khóa trước đó.`,
		},
		{
			img: pic4,
			title: "Xếp loại theo khóa học",
			des: `Ở Khóa 8, số lượng sinh viên xếp loại khá chiếm đa số với khoảng <span class='highlight'>330</span> sinh viên, trong khi đó số sinh viên đạt loại giỏi chỉ khoảng <span class='highlight'>80</span> người và trung bình khá là <span class='highlight'>130</span> người.
            <br/><br/>
            Sang đến Khóa 9, vẫn duy trì xu hướng sinh viên xếp loại khá chiếm số đông với <span class='highlight'>320</span> người, nhưng điểm đáng chú ý là số lượng sinh viên giỏi đã tăng lên <span class='highlight'>110</span> người, trong khi số lượng trung bình khá giảm xuống chỉ còn <span class='highlight'>70</span> người.
            <br/><br/>
            Đến Khóa 10, số sinh viên giỏi tăng lên <span class='highlight'>130</span> người. Số sinh viên khá vẫn chiếm đa số với <span class='highlight'>270</span> người, trong khi trung bình khá tiếp tục giảm xuống <span class='highlight'>50</span> người.`,
		},
		{
			img: pic5,
			title: "Xếp loại học lực theo điểm",
			des: `Với <span class='highlight'>915</span> sinh viên (chiếm <span class='highlight'>51.67%</span>) có điểm dưới 6.5, đây sẽ là nhóm đối mặt với thách thức lớn trong việc cải thiện kết quả học tập.
            <br/><br/>
            Nhóm <span class='highlight'>797</span> sinh viên (<span class='highlight'>45%</span>) đạt điểm từ 6.5 đến 8.0 là điểm sáng của khóa học. Với mức điểm này, họ có cơ hội lớn tốt nghiệp loại khá.
            <br/><br/>
            Điều đáng chú ý là chỉ có <span class='highlight'>59</span> sinh viên (<span class='highlight'>3.33%</span>) đạt điểm trên 8.0. Con số này gợi ý rằng số lượng sinh viên tốt nghiệp loại giỏi và xuất sắc sẽ khá khiêm tốn.`,
		},
	];
	const arr2 = [
		{
			title: "Tổng quan Dữ liệu",
			des: `Dữ liệu phân tích bao gồm <span class='highlight'>1,771</span> sinh viên từ 4 khóa (Khóa 8 đến Khóa 11), với sự phân bố không đồng đều về quy mô và giới tính. Đáng chú ý, có sự sụt giảm dần về số lượng sinh viên qua các khóa học.
			<br/><br/>
			Về cơ cấu: Khóa 8 chiếm <span class='highlight'>31%</span> với 548 sinh viên, Khóa 9 chiếm <span class='highlight'>28.6%</span> với 507 sinh viên, Khóa 10 chiếm <span class='highlight'>25.8%</span> với 457 sinh viên, và Khóa 11 chiếm <span class='highlight'>14.6%</span> với 259 sinh viên.`,
		},
		{
			title: "Phân tích Giới tính",
			des: `Cơ cấu giới tính cho thấy sự mất cân đối đáng kể: Nam giới chiếm <span class='highlight'>86.22%</span> (1,527 sinh viên), trong khi nữ giới chỉ chiếm <span class='highlight'>13.78%</span> (244 sinh viên). Tỷ lệ này tương đương khoảng <span class='highlight'>6.26</span> nam trên 1 nữ.
			<br/><br/>
			Đây là đặc điểm quan trọng cần lưu ý khi phân tích các yếu tố khác như học lực và sự phân bố theo khóa học.`,
		},
		{
			title: "Phân tích Học lực",
			des: `Phân phối điểm số cho thấy ba nhóm chính:
			<br/>
			- <span class='highlight'>51.67%</span> sinh viên (915) có điểm dưới 6.5
			<br/>
			- <span class='highlight'>45%</span> sinh viên (797) đạt điểm từ 6.5 đến 8.0
			<br/>
			- <span class='highlight'>3.33%</span> sinh viên (59) đạt điểm trên 8.0
			<br/><br/>
			Phân phối này cho thấy một krzywa chuẩn lệch trái, với đa số sinh viên tập trung ở mức điểm trung bình và khá.`,
		},
		{
			title: "Tương quan Khóa học và Học lực",
			des: `Phân tích theo khóa học cho thấy xu hướng cải thiện về chất lượng:
			<br/><br/>
			- Khóa 8: <span class='highlight'>330</span> khá, <span class='highlight'>80</span> giỏi, <span class='highlight'>130</span> trung bình khá
			<br/>
			- Khóa 9: <span class='highlight'>320</span> khá, <span class='highlight'>110</span> giỏi, <span class='highlight'>70</span> trung bình khá
			<br/>
			- Khóa 10: <span class='highlight'>270</span> khá, <span class='highlight'>130</span> giỏi, <span class='highlight'>50</span> trung bình khá
			<br/><br/>
			Đáng chú ý là số lượng sinh viên giỏi tăng dần qua các khóa, trong khi số lượng trung bình khá giảm.`,
		},
		{
			img: pic2,
			title: "Tương quan Giới tính và Học lực",
			des: `Phân tích theo giới tính và xếp loại học lực cho thấy:
			<br/><br/>
			Nam: <span class='highlight'>900</span> khá, <span class='highlight'>320</span> giỏi, <span class='highlight'>240</span> trung bình khá
			<br/>
			Nữ: <span class='highlight'>150</span> khá, <span class='highlight'>50</span> giỏi, <span class='highlight'>15</span> trung bình khá
			<br/><br/>
			Tỷ lệ học lực giỏi và khá ở nữ giới cao hơn so với nam giới khi tính theo tỷ lệ phần trăm trong từng nhóm.`,
		},
	];
	return (
		<>
			<div className="container-fluid py-3">
				<div className="excel-preview mb-5">
					<h1 className="text-center mb-5 fw-bold gradient-text">
						<i className="fas fa-chart-pie me-3"></i>
						Chuẩn bị dữ liệu
					</h1>
					<div className="excel-images">
						<div className="excel-image">
							<img
								src={pic7}
								alt="Excel Data Preview 1"
								className="img-fluid"
								width={"100%"}
							/>
						</div>
						<div className="excel-image">
							<img
								src={pic6}
								alt="Excel Data Preview 2"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
				<div className="dashboard-overview">
					<h1 className="text-center mb-5 fw-bold gradient-text">
						<i className="fas fa-chart-pie me-3"></i>
						Tổng quan Phân tích Dữ liệu
					</h1>

					<div className="overview-grid">
						{/* Quadrant 1: Quy mô */}
						<div className="overview-quadrant scale-section">
							<div className="quadrant-header">
								<i className="fas fa-users"></i>
								<h3>Quy mô Sinh viên</h3>
							</div>
							<div className="quadrant-content">
								<div className="main-stat">
									<div className="stat-circle">
										<span className="stat-number">
											1,771
										</span>
										<span className="stat-label">
											Tổng sinh viên
										</span>
									</div>
								</div>
								<div className="sub-stats">
									<div className="stat-item">
										<span className="highlight">548</span>
										<span>Khóa 8 (31%)</span>
									</div>
									<div className="stat-item">
										<span className="highlight">507</span>
										<span>Khóa 9 (28.6%)</span>
									</div>
									<div className="stat-item">
										<span className="highlight">457</span>
										<span>Khóa 10 (25.8%)</span>
									</div>
									<div className="stat-item">
										<span className="highlight">259</span>
										<span>Khóa 11 (14.6%)</span>
									</div>
								</div>
							</div>
						</div>

						{/* Quadrant 2: Giới tính */}
						<div className="overview-quadrant gender-section">
							<div className="quadrant-header">
								<i className="fas fa-venus-mars"></i>
								<h3>Phân bố Giới tính</h3>
							</div>
							<div className="quadrant-content">
								<div className="gender-stats">
									<div className="gender-stat male">
										<i className="fas fa-male"></i>
										<span className="highlight">
											86.22%
										</span>
										<span>1,527 Nam</span>
									</div>
									<div className="gender-stat female">
										<i className="fas fa-female"></i>
										<span className="highlight">
											13.78%
										</span>
										<span>244 Nữ</span>
									</div>
								</div>
								<div className="gender-ratio">
									<span>Tỷ lệ Nam/Nữ:</span>
									<span className="highlight">6.26:1</span>
								</div>
							</div>
						</div>

						{/* Quadrant 3: Học lực */}
						<div className="overview-quadrant performance-section">
							<div className="quadrant-header">
								<i className="fas fa-graduation-cap"></i>
								<h3>Phân bố Học lực</h3>
							</div>
							<div className="quadrant-content">
								<div className="performance-stats">
									<div className="performance-group">
										<h4>Phân bố điểm:</h4>
										<div className="stat-item">
											<span className="highlight">
												51.67%
											</span>
											<span>Dưới 6.5</span>
											<span className="sub-text">
												915 sinh viên
											</span>
											<div className="distribution">
												Nam: 850 | Nữ: 65
											</div>
										</div>
										<div className="stat-item">
											<span className="highlight">
												45%
											</span>
											<span>6.5 - 8.0</span>
											<span className="sub-text">
												797 sinh viên
											</span>
											<div className="distribution">
												Nam: 620 | Nữ: 177
											</div>
										</div>
										<div className="stat-item">
											<span className="highlight">
												3.33%
											</span>
											<span>Trên 8.0</span>
											<span className="sub-text">
												59 sinh viên
											</span>
											<div className="distribution">
												Nam: 57 | Nữ: 2
											</div>
										</div>
									</div>
									<div className="performance-averages">
										<h4>Điểm trung bình:</h4>
										<div className="avg-grid">
											<div>K8: 7.2</div>
											<div>K9: 7.4</div>
											<div>K10: 7.5</div>
											<div>K11: 7.1</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Quadrant 4: Xu hướng */}
						<div className="overview-quadrant trend-section">
							<div className="quadrant-header">
								<i className="fas fa-chart-line"></i>
								<h3>Xu hướng Chất lượng</h3>
							</div>
							<div className="quadrant-content">
								<div className="trend-stats">
									<div className="trend-stats">
										{/* Khóa 8 */}
										<div className="trend-stats">
											{/* Khóa 8 */}
											<div className="trend-row">
												<div className="trend-col">
													<h4>K8 (548)</h4>
													<div className="trend-data">
														<span>
															<i className="fas fa-star text-warning"></i>{" "}
															<span className="highlight">
																80
															</span>{" "}
															Giỏi
														</span>
														<span>
															<i className="fas fa-star-half-alt text-info"></i>{" "}
															<span className="highlight">
																330
															</span>{" "}
															Khá
														</span>
														<span>
															<i className="fas fa-star-half text-secondary"></i>{" "}
															<span className="highlight">
																130
															</span>{" "}
															Trung bình
														</span>
													</div>
												</div>
												<div className="trend-col">
													<h4>K9 (507)</h4>
													<div className="trend-data">
														<span>
															<i className="fas fa-star text-warning"></i>{" "}
															<span className="highlight">
																110
															</span>{" "}
															Giỏi
														</span>
														<span>
															<i className="fas fa-star-half-alt text-info"></i>{" "}
															<span className="highlight">
																320
															</span>{" "}
															Khá
														</span>
														<span>
															<i className="fas fa-star-half text-secondary"></i>{" "}
															<span className="highlight">
																70
															</span>{" "}
															Trung bình
														</span>
													</div>
												</div>
												<div className="trend-col">
													<h4>K10 (457)</h4>
													<div className="trend-data">
														<span>
															<i className="fas fa-star text-warning"></i>{" "}
															<span className="highlight">
																130
															</span>{" "}
															Giỏi
														</span>
														<span>
															<i className="fas fa-star-half-alt text-info"></i>{" "}
															<span className="highlight">
																270
															</span>{" "}
															Khá
														</span>
														<span>
															<i className="fas fa-star-half text-secondary"></i>{" "}
															<span className="highlight">
																50
															</span>{" "}
															Trung bình
														</span>
													</div>
												</div>
												<div className="trend-col">
													<h4>K11 (259)</h4>
													<div className="trend-data">
														<span>
															<i className="fas fa-star text-warning"></i>{" "}
															<span className="highlight">
																50
															</span>{" "}
															Giỏi
														</span>
														<span>
															<i className="fas fa-star-half-alt text-info"></i>{" "}
															<span className="highlight">
																180
															</span>{" "}
															Khá
														</span>
														<span>
															<i className="fas fa-star-half text-secondary"></i>{" "}
															<span className="highlight">
																25
															</span>{" "}
															Trung bình
														</span>
													</div>
												</div>
											</div>
										</div>

										<div className="trend-analysis">
											<h4>Phân tích xu hướng:</h4>
											<ul>
												<li>
													Tỷ lệ SV Giỏi tăng mạnh từ
													K8 (14.6%) đến K10 (28.4%),
													nhưng giảm ở K11 (19.3%)
												</li>
												<li>
													Tỷ lệ SV Khá duy trì ổn định
													ở mức 60-70% qua các khóa
												</li>
												<li>
													TB Khá có xu hướng giảm dần:
													K8 (23.7%) → K11 (9.7%)
												</li>
												<li>
													K11 có sự sụt giảm về số
													lượng nhưng duy trì được tỷ
													lệ khá cao
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className="mt-5">
					<h1 className="text-center mb-5 fw-bold text-primary animate__animated animate__fadeIn">
						Phân tích Biểu đồ Thống kê
					</h1>
					{arr.map((item, index) => (
						<div
							key={index}
							className="row mb-5 p-4 rounded shadow-sm animate__animated animate__fadeInUp"
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							<h3 className="text-center mb-4 text-primary fw-bold">
								{item.title}
							</h3>

							<div className="col-lg-8 mb-3">
								<div className="image-container shadow rounded overflow-hidden">
									<img
										src={item.img}
										alt={item.title}
										className="img-fluid w-100 h-auto"
									/>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="analysis-text p-3 bg-light rounded">
									<p
										className="fs-5 lh-lg"
										dangerouslySetInnerHTML={{
											__html: item.des,
										}}
									></p>
								</div>
							</div>
						</div>
					))}
				</section>
			</div>
		</>
	);
};

export default Home;
