<?php include('header.php') ?>


<section class="subPageTpSection examinationSec">
	<div class="container">
		<div class="secHeading">
			<h1>
				<span class="lightFont">Examination</span>
				Results 2018-19
			</h1>
		</div>

		<div class="rsltInptCont">
			<div class="rsltInptSbCnt">
				<div class="rsltInptFrm">
					<div class="frmDtlInptBx _100 left">
						<label for="">Select department <span class="mandetory">*</span></label>
						<div class="select">
							<select id="job_type" name="job_type" class="select-hidden">
							    <option value=""> Select department </option>
							    <option value=""> option </option>
							    <option value=""> option </option>
							    <option value=""> option </option>
							    <option value=""> option </option>
							    <option value=""> option </option>
							    <option value=""> option </option>
							    <option value=""> option </option>
							</select>
						</div>
					</div>
					<div class="frmDtlInptBx _100 left">
						<label for="">Enter Roll Number <span class="mandetory">*</span></label>
						<input type="text" name="" value="" placeholder="Enter your roll number">
					</div>
					<div class="frmSbmtBtnCnt">
						<button type="button" class="frmSbmtBtn" id="form_submit_buton">Search</button>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>
</section>



<?php include('footer.php') ?>

<script type="text/javascript">
	$(document).ready(function(){
		$('body').addClass('eng jamia');
		$('#examinationsMenu').addClass('active');
		$('#mainMenuLi').addClass('active');
	});
</script>