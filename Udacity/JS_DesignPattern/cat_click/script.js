var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'images/cat00.jpg'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'images/cat01.jpg'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'images/cat02.jpg'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'images/cat03.jpg'
        },
        {
            clickCount : 0,
            name : 'Fluffy',
            imgSrc : 'images/cat04.jpg'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'images/cat05.jpg'
        }
    ]
};

/* ======= Octopus ======= */
var Octopus = {
    init: function() {
        model.currentCat = model.cats[0];
        catView.init();
        catListView.init();
    },

    getCats: function() {
        return model.cats;
    },

    getCurrCat: function() {
        return model.currentCat;
    },

    setCurrCat: function(cat) {
        model.currentCat = cat;
    },

    incrCounter: function() {
        model.currentCat.clickCount++;
    }

};

var catView = {
    init: function() {
        this.nameEle = document.getElementById("cat-name");
        this.countEle = document.getElementById("cat-count");
        this.imgEle = document.getElementById("cat-img");

        this.imgEle.addEventListener("click", function() {
            Octopus.incrCounter();
            catView.render();
        });

        this.render();
    },

    render: function() {
        var cat = Octopus.getCurrCat();
        this.nameEle.textContent = cat.name;
        this.imgEle.src = cat.imgSrc;
        this.countEle.textContent = cat.clickCount;
    }
};

var catListView = {
    init: function() {
        this.catListEle = document.getElementById("cat-list");
        this.render();
    },

    render: function() {
        var cats = Octopus.getCats();
        // empty the cat list
        this.catListEle.innerHTML = '';
        for (var i = 0; i < cats.length; i++) {
            var cat = cats[i];
            var item = document.createElement("li");
            item.textContent = cat.name;

            item.addEventListener("click", (function(catCopy) {
                return function() {
                    Octopus.setCurrCat(catCopy);
                    catView.render();
                }
            })(cat));

            this.catListEle.appendChild(item);
        }
    }
};


Octopus.init();