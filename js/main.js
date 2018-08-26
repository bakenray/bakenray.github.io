!function(){
	var varMove = document.querySelectorAll('.nav-move > li')
	var caseLists = document.querySelectorAll('.case-content > div.case-list')
	for(let i =0; i<varMove.length;i++){
		varMove[i].onclick=function(e){
			varMove[i].classList.add('nav-border')
			getEleSiblings(varMove[i],'nav-border')
			console.log(varMove[i])
			caseLists[i].classList.add('on')
			getEleSiblings(caseLists[i],'on')
			console.log(caseLists[i])
		}
	}	
	// 获取兄弟元素并去除类
	function getEleSiblings(ele,action){  
		var eleParent = ele.parentNode.children
		for(let i=0;i<eleParent.length;i++){
			if(eleParent[i].nodeType ===1 && eleParent[i]!= ele){
				eleParent[i].classList.remove(action)
			}
		}
	}

}.call()

