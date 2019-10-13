
//player object
let player = { 
	character :  $("#player"), 
	playerPos :  0

}


// ai object

console.log(player.character)


let ai = { 

	character : $("#ai"),
	aiPos : 0

}



console.log(ai.character)


let playerPosition = 0 
let aiPosition = 0

// move the player
player.character.click(function() { //easy

	console.log($(this))
	$(this).animate({
	'left' : (playerPosition+=50) +'px'
	})

	console.log('this is the current value of player position: ' + playerPosition)
	player.playerPos = playerPosition
	console.log(player)

	result()

})

player.character.click(function() { //med

	console.log($(this))
	$(this).animate({
	'left' : (playerPosition+=60) +'px'
	})

	console.log('this is the current value of player position: ' + playerPosition)
	player.playerPos = playerPosition
	console.log(player)

	resultmed()
})


player.character.click(function() { //hard

	console.log($(this))
	$(this).animate({
	'left' : (playerPosition+=60) +'px'
	})

	console.log('this is the current value of player position: ' + playerPosition)
	player.playerPos = playerPosition
	console.log(player)

	resulthard()
})






//move the ai 
const aiMove = () => { 

		if(ai.aiPos <= 500) { //easy
			ai.character.animate({
			'left' : (aiPosition+=50) +'px'

			})

		} else { 
			
			return true


		}
			console.log(ai.aiPos)
			ai.aiPos = aiPosition
			setTimeout(aiMove, 500)
			result()

		
}

$("#start").click(function(){ 
	

		aiMove()
		
		


})


const aiMed = () => { //med


		if(ai.aiPos <= 700) {

			ai.character.animate({
			'left' : (aiPosition+=50) +'px'

			})

		} else { 


			return true


		}

			console.log(ai.aiPos)
			ai.aiPos = aiPosition
			setTimeout(aiMed, 600)
			resultmed()

		


}

$("#start1").click(function(){ 


		aiMed()

		


})




const aiHard = () => { //hard


		if(ai.aiPos <= 1000) {
			ai.character.animate({
				'left' : (aiPosition+=60) +'px'

			})

		} else { 


			return true


		}
			console.log(ai.aiPos)
			ai.aiPos = aiPosition
			setTimeout(aiHard, 600)
			resulthard()

		


}

$("#start2").click(function(){ 


		aiHard()
		
		


})





const result = () => { 

	if(player.playerPos === 500){ 
		alert("player one won!")
		window.location.reload()
		return true
	}

	if(ai.aiPos === 500){ 
		alert("Ai won!")
		window.location.reload()
		return true
	}



}




const resultmed = () => { 

	if(player.playerPos === 700){ 
		alert("player one won!")
		window.location.reload()
		return true
	}

	if(ai.aiPos === 700){ 
		alert("Ai won!")
		window.location.reload()
		return true
	}



	


}


const resulthard = () => { 

	if(player.playerPos === 1000){ 
		alert("player one won!")
		window.location.reload()
		return true
	}

	if(ai.aiPos === 1000){ 
		alert("Ai won!")
		window.location.reload()
		return true
	}

}

































