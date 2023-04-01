document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs');

    if (tabs) {
        const btnPrev = document.querySelector('.tabs__arrow--prev');
        const btnNext = document.querySelector('.tabs__arrow--next');
        const tabsList = document.querySelector('.tabs__list');

        const tabsHandler = (path) => {
            document.querySelector('.tabs__btn--active').classList.remove('tabs__btn--active');
            document.querySelector('.tabs__content--active').classList.remove('tabs__content--active');
            document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__btn--active');
            document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
        };

        const btnArrowHandler = (arrow) => {
            let activeParent = document.querySelector('.tabs__btn--active').parentElement;
            let previousParent = activeParent.previousElementSibling;
            let nextParent = activeParent.nextElementSibling;

            if (previousParent && arrow === 'prev') {   
                tabsHandler(previousParent.children[0].dataset.tabsPath);
            } else if (arrow === 'prev') {
                tabsHandler(tabsList.lastElementChild.children[0].dataset.tabsPath);
            }

            if (nextParent && arrow === 'next') {   
                tabsHandler(nextParent.children[0].dataset.tabsPath);
            } else if (arrow === 'next') {
                tabsHandler(tabsList.firstElementChild.children[0].dataset.tabsPath);
            }
        };

        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__btn')) {
             const tabsPath = e.target.dataset.tabsPath;
             tabsHandler(tabsPath);
            }
        });
        btnPrev.addEventListener('click', () => {
            btnArrowHandler('prev');
        });
        btnNext.addEventListener('click', () => {
            btnArrowHandler('next');
        });
    }
});