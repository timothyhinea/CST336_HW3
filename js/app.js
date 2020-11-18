//function that does the work
async function characterF(id){
		let url =  `https://rickandmortyapi.com/api/character/${id}`;
		let response = await fetch(url);
		let data = await response.json();
		
		console.log(data);
		//console.log(data);
		$("#charactersNotFound").addClass("toggle");
		$("#infoSection").removeClass("toggle");
		$("#characterPicture").attr("src", data.image);
		$("#name").html(data.name);
		$("#species").html(data.species);
		$("#location").html(data.location.name);
		$("#origin").html(data.origin.name);
		$("#gender").html(data.gender);
		$("#status").html(data.status);
	
};

//listener for when button is clicked
$("#b1").on("click", function()
	{
		let id = ($("#characters").val());
		if(!isFormValid(id)){
		// To revert page back to defult
			$("#charactersNotFound").removeClass("toggle");
			$("#infoSection").addClass("toggle");
		}else{
		characterF(id);
		}
	})
	
	function isFormValid(id){
		isValid = true;
		if(!(id > 0 && id < 628))
		{isValid = false;
		}
		return isValid;
	}