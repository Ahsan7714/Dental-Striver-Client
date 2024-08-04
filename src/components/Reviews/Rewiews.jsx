import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import "./Reviews.css";
const reviews = [
    {
      "id": 1,
      "comment": "Passed my AFK. Thank you Team Strivers... ",
      "rating": 5,
      "description": "Student",
      "user": {
        "id": 1,
        "name": "Dr. Prathibha Prakash",
        "image": "https://example.com/avatar.jpg"
      }
    },
    {
      "id": 2,
      "comment": "Thank you Dr. Mustafa, Dr. Neha and Dr. Ahmed. You guys made it possible, it was an overwhelming time but your support and guidance helped a lot. This would not have been possible without you all- you are a ray of sunshine. Thank you thank you so much ❤️ ",
      "rating": 5,
      "description": "Student",
      "user": {
        "id": 2,
        "name": "Dr. Shuchi Singh",
        "image": "https://example.com/avatar2.jpg"
      }
    },
    {
      "id": 5,
      "comment": "Thank you Dr. Your quiz lectures helped me a lot…Thank god I joined strivers 🙏😊  … ",
      "rating": 5,
      "description": "Student",
      "user": {
        "id": 3,
        "name": "Dr. Prabhjot",
        "image": "https://example.com/avatar3.jpg"
      }
    },
    {
      "id": 6,
      "comment": "I passed the Afk exam. Thank you so much Dr. Musthafa, Dr. Neha and Dr. Ahmed for your greatest support. Without your help this wouldn’t have been possible. Your lectures were very helpful for me. The most important thing is your lectures contained all the recent articles and confined notes from the reference text books. You made us focus on what is really important rather than getting overwhelmed. You taught us how to study smart instead of studying hard. Also the weekly quizzes were so helpful. That was the main reason which made me study and revise again. Your mocks were really good. Once again I thank you all soo much for being a part of this success.       ",
      "rating": 5,
      // "description": "Student",
      "user": {
        "id": 1,
        "name": "Dr. Muneera Mohayelden",
        "image": "https://example.com/avatar.jpg"
      }
    },
    {
      "id": 7,
      "comment": "Thanks. I passed it because you guys were wonderful!!!! ",
      "rating": 5,
      "description": "Student",
      "user": {
        "id": 2,
        "name": "Dr. Grace",
        "image": "https://example.com/avatar2.jpg"
      }
    },
    {
      "id": 8,
      "comment": "Moving to a new country itself is challenging and on top of that building up a career is another level, AFK being the first hurdle in that path. Graduating some 15 years ago and being out of dentistry at least 5 years ago, I didn’t want to give this exam in the first place! It took me almost 4 years to build up the confidence that this exam is not impossible! And that began when I connected with Strivers in one of their free zoom lectures. Dr.Mustafa was the first person I came across who said that this exam is doable! After putting a lot of thought into it, I joined their course. I am a person who likes to learn deep, but that’s not helpful all the time. Being my first attempt, I didn’t know where to start from! Dr.Mustafa, Dr.Neha, Dr.Ahmed steered me in the right direction. The lectures, weekly quizzes and discussions were super helpful! I just had to know what I am expected to know, they call it studying smart! I am so thankful for their guidance in helping me! You guys are super awesome!! … Above all, I want to thank God for His amazing ways and works in my life and His abundant blessings!!",
      "rating": 5,
      // "description": "Student",
      "user": {
        "id": 3,
        "name": "Dr. M",
        "image": "https://example.com/avatar3.jpg"
      }
    },
  ];
  


const Rewiews = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      const colors = ['#E5F1FF', '#FFFBE5', '#F4E5FF'];
  return (
    <div className=" py-14">
      <div className=" flex flex-col items-center justify-center gap-3">
        <h2 className="text-4xl font-bold text-center px-4">What our students says?</h2>
        <p className=" bg-[#508a7e] text-[#508a7e] w-20 h-1 text-center"></p>
      </div>
      <div className=' py-8 mx-auto ml-5'>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        containerClass="carousel-container"
      >
        {reviews && reviews.length > 0 ? reviews.map((card, index) => (
          <div
            className='carousel-item slide_1'
            key={card.id}
            style={{ background: colors[index % colors.length] }}
          >
            {/* <div className='comma-img'><img src={commaimg1} alt="" /></div> */}
            <div className='reviewCard-1'>
              <p>{card.comment}</p>
            </div>
            <div className='reviewCard-2'>
              <div className='reviewCardA-2'>
                <div className='reviewCardA-2-img'>
                  {/* <img src={card.user.image || image1} alt={card.user.name} className=' rounded-full h-[60px] w-[60px] object-cover' /> */}
                </div>
                <div className='reviewCardA-2-name'>
                  <h3>{card.user.name}</h3>
                  {/* <span>{card.description}</span> */}
                  <div className='stars'>
                  <ReactStars
                      count={5}
                      value={card.rating}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )) : (
          <div>No Reviews Found</div>
        )}
      </Carousel>

      </div>
    </div>
  );
};

export default Rewiews;
