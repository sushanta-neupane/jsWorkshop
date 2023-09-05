// cars data 

const cars = [
  {
    id: 1,
    title: "Toyota Camry",
    category: "Sedan",
    price: 25000,
    desc: "The Toyota Camry is a reliable and fuel-efficient sedan known for its comfortable ride.",
    img: "./images/item-1.webp",
  },
  {
    id: 2,
    title: "Honda Civic",
    category: "Sedan",
    price: 22000,
    desc: "The Honda Civic is a compact sedan with excellent fuel economy and a spacious interior.",
    img: "./images/item-2.webp",
  },
  {
    id: 3,
    title: "Ford F-150",
    category: "Truck",
    price: 40000,
    desc: "The Ford F-150 is a powerful pickup truck known for its towing capacity and rugged design.",
    img: "./images/item-3.webp",
  },
  {
    id: 4,
    title: "Tesla Model 3",
    category: "Electric",
    price: 50000,
    desc: "The Tesla Model 3 is an all-electric sedan with cutting-edge technology and impressive range.",
    img: "./images/item-4.webp",
  },
  {
    id: 5,
    title: "Chevrolet Silverado",
    category: "Truck",
    price: 38000,
    desc: "The Chevrolet Silverado is a versatile and dependable pickup truck with various engine options.",
    img: "./images/item-5.webp",
  },
  {
    id: 6,
    title: "Nissan Altima",
    category: "Sedan",
    price: 23000,
    desc: "The Nissan Altima offers a comfortable ride and good fuel efficiency for daily commuting.",
    img: "./images/item-6.webp",
  },
  {
    id: 7,
    title: "BMW 3 Series",
    category: "Luxury",
    price: 45000,
    desc: "The BMW 3 Series is a luxury sedan known for its sporty performance and upscale interior.",
    img: "./images/item-7.webp",
  },
  {
    id: 8,
    title: "Jeep Wrangler",
    category: "SUV",
    price: 35000,
    desc: "The Jeep Wrangler is an iconic off-road SUV with excellent off-roading capabilities.",
    img: "./images/item-8.webp",
  },
  {
    id: 9,
    title: "Hyundai Sonata",
    category: "Sedan",
    price: 24000,
    desc: "The Hyundai Sonata is a midsize sedan with a comfortable interior and modern features.",
    img: "./images/item-9.webp",
  },
  {
    id: 10,
    title: "Chevrolet Corvette",
    category: "SportsCar",
    price: 70000,
    desc: "The Chevrolet Corvette is a high-performance sports car with a sleek design and powerful engine options.",
    img: "./images/item-10.webp",
  },
  {
    id: 11,
    title: "Subaru Outback",
    category: "SUV",
    price: 28000,
    desc: "The Subaru Outback is a versatile SUV with all-wheel drive and plenty of cargo space.",
    img: "./images/item-11.webp",
  },
  {
    id: 12,
    title: "Audi A4",
    category: "Luxury",
    price: 48000,
    desc: "The Audi A4 is a luxury sedan known for its advanced technology and refined interior.",
    img: "./images/item-12.webp",
  },
  {
    id: 13,
    title: "Mazda CX-5",
    category: "SUV",
    price: 27000,
    desc: "The Mazda CX-5 is a stylish and compact SUV with responsive handling and a comfortable cabin.",
    img: "./images/item-13.webp",
  },
  {
    id: 14,
    title: "Volkswagen Golf",
    category: "Hatchback",
    price: 21000,
    desc: "The Volkswagen Golf is a compact hatchback with a fun-to-drive nature and practicality.",
    img: "./images/item-14.webp",
  },
  {
    id: 15,
    title: "Lexus RX",
    category: "Luxury",
    price: 52000,
    desc: "The Lexus RX is a luxury SUV with a plush interior and a reputation for reliability.",
    img: "./images/item-15.webp",
  },
  {
    id: 16,
    title: "Jeep Grand Cherokee",
    category: "SUV",
    price: 42000,
    desc: "The Jeep Grand Cherokee is a midsize SUV known for its off-road capabilities and spacious cabin.",
    img: "./images/item-16.webp",
  }
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//event listiner for click
btnContainer.addEventListener('click',function(e){
  console.log(e.target.getAttribute('data-id'))
  let clickedValue= (e.target.getAttribute('data-id'))
  displayData(cars,clickedValue);
})

//load all data initially
window.addEventListener("DOMContentLoaded", function (){
  displayData(cars,"all");
})


//htmlgenerator and category handler
function displayData(copiedObject , clickedValue)
{

  var htmlGen = copiedObject.map(function(car){
    if (clickedValue === "all")
    {
     
      return `<article class="menu-item">
              
      <img src=${car.img} alt=${car.title} class="photo" />
  
      <div class="item-info">
              <header>
                  <h4>
                      ${car.title}
                  </h4>
                  <h4 class="price">
                      $${car.price}
                  </h4>
              </header>
              <p class="item-text">
                  ${car.desc}
              </p>
          </div>
  
  </article>`
    }
    else if(clickedValue === car.category) {
      {


          return `<article class="menu-item">
                  
          <img src=${car.img} alt=${car.title} class="photo" />
      
          <div class="item-info">
                  <header>
                      <h4>
                          ${car.title}
                      </h4>
                      <h4 class="price">
                          $${car.price}
                      </h4>
                  </header>
                  <p class="item-text">
                      ${car.desc}
                  </p>
              </div>
      
      </article>`
        
        
      }


    }

  })
  // joining array
  sectionCenter.innerHTML = htmlGen.join("")
}

