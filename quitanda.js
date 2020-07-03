const quitanda = function (fruta){
    switch (fruta) {             
        case 'maca':
        		console.log('Não vendemos esta fruta aqui')
        		break
        case 'kiwi':
       		    console.log('Estamos com escassez de kiwis')
         		break
        case 'melancia':
        		console.log('Aqui está, são 3 reais o quilo')
         		break
      	default:
       		console.log('fruta inválida')
         	}

    }
    quitanda ('maca')
    quitanda ('kiwi')
    quitanda ('melancia')
    quitanda ('morango')
    
      

