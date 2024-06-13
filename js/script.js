document.addEventListener('DOMContentLoaded', function(event) {	

	var burger = document.querySelector('.header__burger');
	var body = document.querySelector('body');
	var menu = document.querySelector('.menu');
	var menuLink = document.querySelectorAll('.menu__link')
	var menuButton = document.querySelectorAll('.hassublist>a');
	if(burger){
    burger.addEventListener('click', function(event) {
    		burger.classList.toggle('active');
    		menu.classList.toggle('active');
    		body.classList.toggle('lock');
    		if(document.querySelector('.hassublist.open')){
    			document.querySelector('.hassublist.open').parentNode.classList.remove('open');
    			document.querySelector('.hassublist.open').classList.remove('open');

    		}
  	});
	}
	if(menuButton){
		menuButton.forEach(function(menuButton) {
		    menuButton.addEventListener('click', function(event) {
		    	event.preventDefault();
		    	menuButton.parentNode.classList.add('open');
		    	menuButton.closest('.menu__list').classList.add('open')
		    	if(menuButton.closest('ul')){
		    		menuButton.closest('ul').classList.add('hide');
		    	}
		    });
		});
	}
	var menuMainItem = document.querySelectorAll('.menu__item-main');
	if(menuMainItem){
		menuMainItem.forEach(function(menuMainItem) {
		    menuMainItem.addEventListener('click', function(event) {
		    		event.preventDefault();
		    		menuMainItem.parentNode.parentNode.parentNode.classList.remove('open');
		    		menuMainItem.closest('.menu__item').classList.remove('open');
			    	if(menuMainItem.closest('.hide')){
			    		menuMainItem.closest('.hide').classList.remove('hide');
			    	}

		    });
		});
	}
	var headerCity = document.querySelectorAll('.header__city span');
	if(headerCity){
		headerCity.forEach(function(headerCity) {
		    headerCity.addEventListener('click', function(event) {
		    		event.preventDefault();
		    		headerCity.parentNode.classList.toggle('active');
		    });
		});
	}
	var headerCitySel = document.querySelectorAll('.header__city-radio input');
	if(headerCitySel){
		headerCitySel.forEach(function(headerCitySel) {
		    headerCitySel.addEventListener('change', function(event) {
		    		headerCitySel.closest('.header__city').classList.remove('active');
		    		headerCitySel.closest('.header__city').querySelector('b').textContent = headerCitySel.nextElementSibling.textContent
		    });
		});
	}
	var search = document.querySelector('.header__search');
	var headerSearch = document.querySelector('.header-search');
	var headerSearchClose = document.querySelectorAll('.header-search__close, .header-search__close2');
	if(search && headerSearch){
	    search.addEventListener('click', function(event) {
	    		event.preventDefault();
	    		burger.classList.remove('active');
	    		menu.classList.remove('active');
	    		body.classList.remove('lock');

	    		body.classList.toggle('searchlock');
	    		search.classList.toggle('active');
	    		headerSearch.classList.toggle('active');
	    });
		headerSearchClose.forEach(function(headerSearchClose) {
		    headerSearchClose.addEventListener('click', function(event) {
	    		search.classList.toggle('active');
	    		body.classList.remove('searchlock');
	    		headerSearch.classList.toggle('active');
		    });
		});
	}

  if(document.querySelector('.main__slider')){
      new Swiper('.main__slider', {
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        loop:true,
		  navigation: {
		    nextEl: '.main__arrow-right',
		    prevEl: '.main__arrow-left',
		  },
		  pagination: {
		  	 clickable:true,
		    el: '.main__pagination',
		  },

      });
   }


	function updateLine() {
		var azimutCard = document.querySelectorAll('.azimut__card')
		if(azimutCard){
			azimutCard.forEach(function(card) {
		    card.addEventListener('mouseenter', function(event) {
		    	event.preventDefault();
		    	card.classList.add('hover');
		    	var cardImg = card.getAttribute('data-imgsrc');
		    	var cardImgContainer = document.querySelector('.azimut__bg img');
		    	if(cardImg && cardImgContainer){
		    		cardImgContainer.setAttribute('src', cardImg)
		    	}
		    	
		    });
		    card.addEventListener('mouseleave', function(event) {
		    	event.preventDefault();
		    	card.classList.remove('hover')
		    });
		    var azimutBody = document.querySelector('.azimut__body');
			  if(azimutBody){
					var distance = azimutBody.getBoundingClientRect().left - card.getBoundingClientRect().left;
					var sizecard = Math.abs(distance) + 'px';
					document.documentElement.style.setProperty('--sizecard', distance + 'px');
		    }
			  var logo = document.querySelector('.azimut__logo');
			  var line = card.querySelector('.azimut__line');
			  if (line && logo) {
			    	var lineSpan = line.querySelector('span');
				    var cardRect = card.getBoundingClientRect();
				    var logoRect = logo.getBoundingClientRect();
				    var lineWidth = logoRect.left - cardRect.left + logoRect.width / 2 - cardRect.width - 100;
				    var lineHeight = logoRect.top - cardRect.top + logoRect.height / 2 - cardRect.height;

				    line.style.width = lineWidth + 'px';
				    line.style.height = lineHeight + 'px';

				    var lineLength = Math.sqrt(lineWidth * lineWidth + lineHeight * lineHeight);
				    lineSpan.style.width = lineLength + 'px';

				    var angleRad = Math.atan2(lineHeight, lineWidth);
				    var angleDeg = angleRad * (180 / Math.PI);
				    lineSpan.style.transform = 'rotate(' + angleDeg + 'deg)';
			  }	   
			});
		}
	}
	updateLine();
	window.addEventListener('resize', function() {
	  updateLine();
	});


  if(document.querySelector('.logotypes__slider')){
      new Swiper('.logotypes__slider', {
        speed: 600,
        spaceBetween: 104,
        slidesPerView: 5,
        loop:false,
			  pagination: {
			  	 clickable:true,
			    el: '.logotypes__pagination',
			  },
			  breakpoints: {
			  	1161:{
			  		slidesPerView: 5,
			  		spaceBetween: 104,
			  	},
			  	971:{
			  		slidesPerView: 4,
			  		spaceBetween: 104,
			  	},			  
			  	791:{
			  		spaceBetween: 62,
			  		slidesPerView: 3.5,
			  	},
			  	0:{
			  		spaceBetween: 36,
			  		slidesPerView: 2.5,
			  	},

			  }
      });
   }


	var tabsItems = document.querySelectorAll('[data-tab]');
	if(tabsItems){
		tabsItems.forEach(function(tabsItem) {
		    tabsItem.addEventListener('mouseenter', function(event) {
		    	if(window.screen.width > 970){
				    var tabParent = this.closest('.tabs');
				    var tabActive = tabParent.querySelector('[data-tab].hover');
				    var contentActive = tabParent.querySelector('[data-content].target');
				    if (tabActive) {
				        tabActive.classList.remove('hover');
				    }
				    if (contentActive) {
				        contentActive.classList.remove('target');
				    }
				    this.classList.add('hover');
				    const tabContent = this.getAttribute("data-tab");
				    const tabId = tabParent.querySelector(`[data-content="${tabContent}"]`);
				    if (tabId !== null) {
				        tabId.classList.add("target");
				    }		    		
		    	}
		    });
		});
		if(window.screen.width > 970){
			setMinHeightForCatalogWrappers();
			window.addEventListener('resize', setMinHeightForCatalogWrappers);					
		}
	}
	var catalogLink = document.querySelectorAll('.catalog__left>div');
	if(catalogLink){
		catalogLink.forEach(function(catalogLink) {
	    catalogLink.addEventListener('click', function(event) {
					if(catalogLink.querySelector('.catalog__wrapper')){
						slideToggle(catalogLink.querySelector('.catalog__wrapper'));
					}
	    });
	  });
		function slideToggle(element) {
		  var target = element.style;
		  var slideableElements = document.querySelectorAll('.catalog__wrapper');
		  slideableElements.forEach(function(item) {
		    if (item !== element && item.classList.contains('active')) {
		      var itemTarget = item.style;
		      itemTarget.maxHeight = null;
		      item.classList.remove('active');
		      item.parentNode.classList.remove('active');
		    }
		  });
		  if (target.maxHeight) {
		    target.maxHeight = null;
		    element.classList.remove('active');
		    element.parentNode.classList.remove('active');
		  } else {
		    target.maxHeight = element.scrollHeight + 'px';
		    element.classList.add('active');
		    element.parentNode.classList.add('active');
		  }
		}


	}


	function setMinHeightForCatalogWrappers() {
	  var catalogWrappers = document.querySelectorAll('.catalog__wrapper');
	  var maxHeight = 0;
	  catalogWrappers.forEach(function(wrapper) {
	    var wrapperHeight = wrapper.offsetHeight;
	    if (wrapperHeight > maxHeight) {
	      maxHeight = wrapperHeight;
	    }
	  });
	  catalogWrappers.forEach(function(wrapper) {
	    wrapper.style.minHeight = maxHeight + 'px';
	  });
	}
  if(document.querySelector('.special__slider')){
      new Swiper('.special__slider', {
        speed: 600,
        spaceBetween: 16,
        slidesPerView: 4,
			  navigation: {
			    nextEl: '.special__next',
			    prevEl: '.special__prev',
			  },
			  pagination: {
			  	 clickable:true,
			   	 el: '.special__pagination',
			  },
			  breakpoints: {
			  	971:{
			  		spaceBetween: 16,
			  		slidesPerView: 4,
			  	},			  
			  	791:{
			  		spaceBetween: 8,
			  		slidesPerView: 3,
			  	},
			  	501:{
			  		spaceBetween: 16,
			  		slidesPerView: 2,
			  	},
			  	0:{
			  		spaceBetween: 16,
			  		slidesPerView: 1.1,
			  	},
			  }
      });
   }
  if(document.querySelector('.clients__slider')){
      var mySwiper = new Swiper('.clients__slider', {
        speed: 600,
        spaceBetween: 16,
        slidesPerView: 4,
			  navigation: {
			    nextEl: '.clients__next',
			    prevEl: '.clients__prev',
			  },
			  pagination: {
			  	 clickable:true,
			   	 el: '.clients__pagination',
			  },
			  breakpoints: {
			  	971:{
			  		spaceBetween: 16,
			  		slidesPerView: 4,
			  	},
			  	791:{
			  		spaceBetween: 8,
			  		slidesPerView: 4,
			  	},
			  	501:{
			  		spaceBetween: 16,
			  		slidesPerView: 2,
			  	},
			  	0:{
			  		spaceBetween: 16,
			  		slidesPerView: 1.1,
			  	},
			  }
      });
   }

  const sendButton = document.querySelectorAll(".consultation__button");
  if(sendButton){
	  sendButton.forEach(function (sendButton) {
	    sendButton.addEventListener("click", function (event) {
	    	event.preventDefault();
			  var formConsultation = this.closest("form");
			  if (formConsultation) {
			    var requiredElements = formConsultation.querySelectorAll("[required]");
			    var allValid = true;
			    requiredElements.forEach(function(element) {
			      if (!validateElement(element)) {
			        allValid = false;
			      }
			    });
			    if(allValid){
			    	formConsultation.submit();
			    }
			  }
	    });
	  });  	
  }
  const consultationInput = document.querySelectorAll(".consultation__input input");
  if(consultationInput){
	  consultationInput.forEach(function (consultationInput) {
	    consultationInput.addEventListener("focus", function (event) {
			  toggleActive(consultationInput)
	    });
	    consultationInput.addEventListener("input", function (event) {
			  toggleActive(consultationInput)
	    });
	    consultationInput.addEventListener("blur", function (event) {
			  toggleActive(consultationInput)
	    });

	  });  	
  }
  function toggleActive(inputElement) {
      var parentElement = inputElement.parentElement;
      if (inputElement.value.trim() !== "" || inputElement === document.activeElement) {
          parentElement.classList.add("active");
      } else {
          parentElement.classList.remove("active");
      }
  }


	var selectItems = document.querySelectorAll('[data-sel]');
	if(selectItems){
		selectItems.forEach(function(selectItems) {
		    selectItems.addEventListener('click', function(event) {
			    var selectParent = this.closest('.tabs');
			    var selectActive = selectParent.querySelector('[data-sel].active');
			    var selectContentActive = selectParent.querySelector('[data-selcontent].target');
			    if (selectActive) {
			        selectActive.classList.remove('active');
			    }
			    if (selectContentActive) {
			        selectContentActive.classList.remove('target');
			    }
			    this.classList.add('active');
			    const selContent = this.getAttribute("data-sel");
			    const selId = selectParent.querySelector(`[data-selcontent="${selContent}"]`);
			    if (selId !== null) {
			        selId.classList.add("target");
			    }
		    });
		});
	}


	var serviceSelect = document.querySelectorAll('.service__select');
	var serviceSel = document.querySelectorAll('.service__sel');
	var serviceTop = document.querySelector('.service__top');
	if(serviceSelect){
		serviceSelect.forEach(function(serviceSelect) {
		    serviceSelect.addEventListener('click', function(event) {
		    	serviceSelect.classList.toggle('open')
		    });
		});
		serviceSel.forEach(function(serviceSel) {
		    serviceSel.addEventListener('click', function(event) {
		    	var serviceSelTop = serviceSel.parentNode.previousElementSibling;
		    	var serviceSelTopSpan = serviceSelTop.querySelector('span');
		    	if(serviceSelTopSpan){
		    		serviceSelTopSpan.textContent = serviceSel.textContent;
		    	}
		    	if(serviceSelTop){
		    		serviceSelTop.classList.remove('open');
		    	}
		    });
		});
		document.addEventListener('click', function(event) {
		  if (serviceTop && !serviceTop.contains(event.target)) {
    		if(serviceTop.querySelector('.service__select.open')){
    			serviceTop.querySelector('.service__select.open').classList.remove('open');
    		}
		  }	  
		});

	}

  if(document.querySelector('.events__swiper')){
      new Swiper('.events__swiper', {
        speed: 600,
        spaceBetween: 12,
        slidesPerView: 1,
        loop:true,
			  navigation: {
			    nextEl: '.events__arrow-right',
			    prevEl: '.events__arrow-left',
			  },
			  pagination: {
			  	type:'fraction',
			    el: '.events__pagination',
			  },

      });
   }
  if(document.querySelector('.presscenter__slider')){
      new Swiper('.presscenter__slider', {
        speed: 600,
        spaceBetween: 16,
        slidesPerView: 3,
			  navigation: {
			    nextEl: '.presscenter__next',
			    prevEl: '.presscenter__prev',
			  },
			  pagination: {
			  	 clickable:true,
			   	 el: '.presscenter__pagination',
			  },
			  breakpoints: {
			  	971:{
			  		spaceBetween: 16,
			  		slidesPerView: 3,
			  	},			  
			  	791:{
			  		spaceBetween: 8,
			  		slidesPerView: 2,
			  	},
			  	0:{
			  		spaceBetween: 16,
			  		slidesPerView: 1.1,
			  	},
			  }
      });
   }

	var dataTo = document.querySelectorAll('[data-to]');
	if(dataTo){
		dataTo.forEach(function(dataTo) {
        function handleLessThan1024(event) {
        		var toParent = this.closest('.header-bottom__list');
            var toActive = toParent.querySelector('[data-to].hover');
            var toContentActive = toParent.nextElementSibling.querySelector('[data-this].target');

            if (toActive) {
                toActive.classList.remove('hover');
            }
            if (toContentActive) {
                toContentActive.classList.remove('target');
            }
            this.classList.add('hover');
            const toContent = this.getAttribute("data-to");
            const toId = toParent.nextElementSibling.querySelector(`[data-this="${toContent}"]`);

            if (toId !== null) {
                toId.classList.add("target");
            }
            var toParentPrev = toId.parentNode.previousElementSibling;
            if(toParentPrev){
            	toParentPrev.classList.add("hide");   
            }
           	if(this.closest('.header-bottom__list:first-child')){
            	var headerBottomListHover = this.closest('.header-bottom__list:first-child').nextElementSibling.querySelector('ul li.hover');
            	var headerBottomListTarget = this.closest('.header-bottom__list:first-child').nextElementSibling.nextElementSibling.querySelector('ul.target')
            	if(headerBottomListHover){
            		headerBottomListHover.classList.remove('hover');
            	}
            	if(headerBottomListTarget){
            		headerBottomListTarget.classList.remove('target');
            	}
            }

        }
        function handleGreaterThanOrEqual1024(event) {
            var toParent = this.closest('.header-bottom__list');
            
            var toActive = toParent.querySelector('[data-to].hover');
            var toContentActive = toParent.nextElementSibling.querySelector('[data-this].target');

            if (toActive) {
                toActive.classList.remove('hover');
            }
            if (toContentActive) {
                toContentActive.classList.remove('target');
            }

            this.classList.add('hover');
            const toContent = this.getAttribute("data-to");
            const toId = toParent.nextElementSibling.querySelector(`[data-this="${toContent}"]`);
            if (toId !== null) {
                toId.classList.add("target");                
            }
            if(this.closest('.header-bottom__list:first-child')){
            	var headerBottomListHover = this.closest('.header-bottom__list:first-child').nextElementSibling.querySelector('ul li.hover');
            	var headerBottomListTarget = this.closest('.header-bottom__list:first-child').nextElementSibling.nextElementSibling.querySelector('ul.target')
            	if(headerBottomListHover){
            		headerBottomListHover.classList.remove('hover');
            	}
            	if(headerBottomListTarget){
            		headerBottomListTarget.classList.remove('target');
            	}
            }
        }
        if (window.innerWidth < 1024) {
            dataTo.addEventListener('click', handleLessThan1024);
        } else {
            dataTo.addEventListener('mouseenter', handleGreaterThanOrEqual1024);
        }

		});
	}

	var headerBottomCard = document.querySelectorAll('.header-bottom__card>span');
	if(headerBottomCard){
		headerBottomCard.forEach(function(headerBottomCard) {
		    headerBottomCard.addEventListener('click', function(event) {
		    	event.preventDefault();
		    	headerBottomCard.parentNode.classList.toggle('active');
		    });
				document.addEventListener('click', function(event) {
				  if (!headerBottomCard.parentNode.contains(event.target)) {
		    		headerBottomCard.parentNode.classList.remove('active');
				  }	  
				});

		});
	}
	var headerBottom__list = document.querySelectorAll('.header-bottom__list ul b');
	if(headerBottom__list){
		headerBottom__list.forEach(function(headerBottom__list) {
		    headerBottom__list.addEventListener('click', function(event) {
		    	event.preventDefault();
		    	headerBottom__list.parentNode.classList.toggle('target');
		    	headerBottom__list.parentNode.parentNode.previousElementSibling.classList.toggle('hide');
		    });
		});
	}
	var filterItems = document.querySelectorAll('[data-filter]');
	if(filterItems){
		filterItems.forEach(function(filter) {
		  filter.addEventListener('click', function(event) {
        var filterValue = filter.getAttribute("data-filter");
        var filterText = filter.textContent;
        var contentItems = document.querySelectorAll('[data-filtercontent]');
        contentItems.forEach(function (item) {
            if (filterValue === "all" || item.getAttribute("data-filtercontent") === filterValue) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        });
        if(document.querySelector('.activity__name')){
        	document.querySelector('.activity__name').textContent = filterText;
        }
		    filterItems.forEach(function(filterItems) {
		      filterItems.classList.remove('active');
		    });
		    filter.classList.add('active');
		  });
		});	
	}
  if(document.querySelector('.news__slider')){
      new Swiper('.news__slider', {
        speed: 600,
        spaceBetween: 8,
        slidesPerView: 1,
        loop:true,
				navigation: {
				  nextEl: '.news__next',
				  prevEl: '.news__prev',
				},
				pagination: {
					 clickable:true,
				  el: '.news__pagination',
				},
      });
   }
   if(document.querySelector('.product__swiper')){
	new Swiper('.product__swiper', {
	  speed: 600,
	  spaceBetween: 8,
	  slidesPerView: 1,
	  loop:true,
		navigation: {
		nextEl: '.product__next',
		prevEl: '.product__prev',
		},
		pagination: {
			clickable:true,
		el: '.product__pagination',
		},
	});
 }

  const popupButton = document.querySelectorAll("[data-topopup]");
  if(popupButton){
	  popupButton.forEach(function (popupButton) {
	    popupButton.addEventListener("click", function (event) {
	    	event.preventDefault();
	      const dataPopup = this.getAttribute("data-topopup");
	      const dataClassPopup = document.querySelector(`${dataPopup}`);
	      if (dataClassPopup !== null) {
	        dataClassPopup.classList.add("open");
	        body.classList.add('popuplock');	
	      }
	    });
	  });  	
  }
	var popupClose = document.querySelectorAll('.popup__close');
	if(popupClose){
		popupClose.forEach(function(popupClose) {
		    popupClose.addEventListener('click', function(event) {
		    		var body = document.querySelector('body');
		    		body.classList.remove('popuplock');	
		    		popupClose.closest('.popup').classList.remove('open');

		    });
		});		
	}
	var categorySortTop = document.querySelectorAll('.category__sort-top');
	if(categorySortTop){
		categorySortTop.forEach(function(categorySortTop) {
		    categorySortTop.addEventListener('click', function(event) {
		    		event.preventDefault();
		    		categorySortTop.parentNode.classList.toggle('active');
		    });
				document.addEventListener('click', function(event) {
				  if (!categorySortTop.parentNode.contains(event.target)) {
		    		categorySortTop.parentNode.classList.remove('active');
				  }	  
				});

		});
	}
  var displayButtons = document.querySelectorAll('.category__type input');
  var categoriesCards = document.querySelector('.category__cards');
  if(displayButtons){
	  function handleDisplayChange() {
	      displayButtons.forEach(function (button) {
	          if (button.checked && button.hasAttribute('data-tolist')) {
	              categoriesCards.classList.toggle('list', true);
	          } else {
	              categoriesCards.classList.remove('list');
	          }
	      });
	  }
	  displayButtons.forEach(function (button) {
	      button.addEventListener('change', handleDisplayChange);
	  });  	
  }
  const selects = document.querySelectorAll("select");
  if(selects){
	  selects.forEach(function (select) {
	    NiceSelect.bind(select);
	  });  	
  }
	var decrementButtons = document.querySelectorAll('.decrement');
	var incrementButtons = document.querySelectorAll('.increment');
	decrementButtons.forEach(function (button) {
	    button.addEventListener('click', function (event) {
				event.preventDefault();
				decreaseQuantity(button);
	    });
	});
	incrementButtons.forEach(function (button) {
	    button.addEventListener('click', function (event) {
				event.preventDefault();
				increaseQuantity(button);
	    });
	});
	function decreaseQuantity(clickedButton) {
	    var parentDiv = clickedButton.closest('.quantity');
	    var quantityInput = parentDiv.querySelector('.quantityInput');
	    var currentValue = parseInt(quantityInput.value, 10);
	    if (!isNaN(currentValue) && currentValue > 1) {
	        quantityInput.value = currentValue - 1;
	    }
	}
	function increaseQuantity(clickedButton) {
	    var parentDiv = clickedButton.closest('.quantity');
	    var quantityInput = parentDiv.querySelector('.quantityInput');

	    var currentValue = parseInt(quantityInput.value, 10);
	    if (!isNaN(currentValue)) {
	        quantityInput.value = currentValue + 1;
	    }
	}

    const searchInput = document.querySelector('.header-search__input input');
    const searchCards = document.querySelector('.header-search__cards');
    if(searchInput && searchCards){
	    searchInput.addEventListener('focus', function () {
	        if (searchCards.children.length > 0) {
	            searchCards.classList.add('show');
	        }
	    });
	    searchInput.addEventListener('blur', function () {
	        setTimeout(function(){
	        	searchCards.classList.remove('show');
	        }, 10);
	    });
	    searchInput.addEventListener('input', function () {
	        const inputValue = this.value.trim().toLowerCase();
	        let hasMatches = false;
	        Array.from(searchCards.children).forEach(function (card) {
	        		if(card.querySelector('.header-search__name')){
		            const cardName = card.querySelector('.header-search__name').textContent.toLowerCase();
		            if (cardName.includes(inputValue)) {
		                card.classList.add('active');
		                hasMatches = true;
		            } else {
		                card.classList.remove('active');
		            }
	        		}
	        });
	        if (!hasMatches) {
	            searchCards.classList.remove('show');
	        } else {
	            searchCards.classList.add('show');
	        }
	    });
    }

  
});



function validateElement(element) {
  var elementType = element.getAttribute("type");
  var errorMessageElement = element.parentNode.querySelector('.errorText');
  if (elementType === "text" || elementType === "tel" || element.tagName === "TEXTAREA") {
    if (element.value.trim() === "") {
  		element.classList.add('error');
  		errorMessageElement.classList.add('show');
      return false;
    }
  } else if (elementType === "email") {
    var emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(element.value)) {
  		element.classList.add('error');
  		errorMessageElement.classList.add('show');
      return false;
    }
  } else if (elementType === "checkbox") {
    if (!element.checked) {
    	element.classList.add('error');
      return false;
    }
  }
  element.classList.remove('error');
  if(errorMessageElement){
  	errorMessageElement.classList.remove('show');
  }
  return true;
}


