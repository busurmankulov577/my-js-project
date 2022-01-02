const upBtn = document.querySelector('.up-button');

const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');

const container = document.querySelector('.container');

const mainSlide = document.querySelector('.main-slide');

const slideCount = mainSlide.querySelectorAll('div').length;


let activeSlideIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;


upBtn.addEventListener('click', () => {
	changeSlide('up');
});


downBtn.addEventListener('click', () => {
	changeSlide('down');
});

document.addEventListener('keydown', event => {
	if( event.key === 'ArrowDown'){
		changeSlide('down');
	}else if (event.key === 'ArrowUp'){
		changeSlide('up');
	}
});

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++;

		if (activeSlideIndex === slideCount) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;

		if (activeSlideIndex < 0) {
			activeSlideIndex = slideCount - 1;
		}
	}

	const height = container.clientHeight;
    

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}



const isPalindrome = x => {
	return x == Number(x.toString().split('').reverse().join(''))
}
console.log(isPalindrome(1122332211));




var twoSum = (nums, target) => {
	const numObj = {}
	for (let i = 0; i < nums.length; i++){
		numObj[nums[i]] = i ;
	}
	for (let i = 0; i < nums.length; i++){
		const diff = target - nums[i];

		if(numObj[diff] && numObj[diff] !== i){
			return [i, numObj[diff]]
		}
	}
	return [];

};
console.log(twoSum([2,7,11,15], 14))
