<?php include('header.php') ?>


<section class="subPageTpSection evntPstPgSec" id="">
	<div class="container">
		<div class="secHeading">
			<h1>
				<span class="lightFont">Image</span>
				Gallery
			</h1>
		</div>

		<div class="imgGlryPgCnt">
			<div class="row">
				<div class="col-lg-4 col-md-4">
					<div class="imgGlryCnt">
						<div class="imgGlrySbCnt">
							<div class="imgGlrySbCnt2"></div>
							<div class="imgGlry">
								<a href="image-gallery-details.php">
									<span class="imgIcn"><i class="fas fa-images"></i></span>
									<img src="img/imgGlryImg.jpg" alt="">
									<h2 class="glryNm">Gazali Day</h2>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="imgGlryCnt">
						<div class="imgGlrySbCnt">
							<div class="imgGlrySbCnt2"></div>
							<div class="imgGlry">
								<a href="image-gallery-details.php">
									<span class="imgIcn"><i class="fas fa-images"></i></span>
									<img src="img/imgGlryImg.jpg" alt="">
									<span class="glryNm">Gazali Day</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="imgGlryCnt">
						<div class="imgGlrySbCnt">
							<div class="imgGlrySbCnt2"></div>
							<div class="imgGlry">
								<a href="image-gallery-details.php">
									<span class="imgIcn"><i class="fas fa-images"></i></span>
									<img src="img/imgGlryImg.jpg" alt="">
									<span class="glryNm">Gazali Day</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="imgGlryCnt">
						<div class="imgGlrySbCnt">
							<div class="imgGlrySbCnt2"></div>
							<div class="imgGlry">
								<a href="image-gallery-details.php">
									<span class="imgIcn"><i class="fas fa-images"></i></span>
									<img src="img/imgGlryImg.jpg" alt="">
									<h2 class="glryNm">Gazali Day</h2>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="imgGlryCnt">
						<div class="imgGlrySbCnt">
							<div class="imgGlrySbCnt2"></div>
							<div class="imgGlry">
								<a href="image-gallery-details.php">
									<span class="imgIcn"><i class="fas fa-images"></i></span>
									<img src="img/imgGlryImg.jpg" alt="">
									<span class="glryNm">Gazali Day</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="imgGlryCnt">
						<div class="imgGlrySbCnt">
							<div class="imgGlrySbCnt2"></div>
							<div class="imgGlry">
								<a href="image-gallery-details.php">
									<span class="imgIcn"><i class="fas fa-images"></i></span>
									<img src="img/imgGlryImg.jpg" alt="">
									<span class="glryNm">Gazali Day</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="paginationCnt">
				<div class="paginationCnt">
					<div class="pagination">
						<span class="nxtPrvBtn pgPrv left">
							<i class="fas fa-angle-left"></i> <span>Prev</span>
						</span>
						
						<ul class="pgNmbrsCnt left">
							<li class="active">1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
						</ul>

						<span class="nxtPrvBtn pgNxt right">
							<span>Next</span>
							<i class="fas fa-angle-right"></i>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>




<?php include('footer.php') ?>

<script type="text/javascript">
	$(document).ready(function(){
		$('body').addClass('eng jamia imageGalleryPage');
		$('#mainMenuLi').removeClass('active');
		$('#mediaMenu').addClass('active');
		$('.imgGlryLi').addClass('active');
	});
</script>