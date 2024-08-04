import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import "./Reviews.css";
const reviews = [
    
    {
      "id": 1,
      "comment": "Thank you Dr. Mustafa, Dr. Neha and Dr. Ahmed. You guys made it possible, it was an overwhelming time but your support and guidance helped a lot. This would not have been possible without you all- you are a ray of sunshine. Thank you thank you so much ❤️ ",
      "rating": 5,
      "user": {
        "id": 1,
        "name": "Dr. Shuchi Singh",
        "image": "https://example.com/avatar2.jpg"
      }
    },
    
    {
      "id": 2,
      "comment": "I passed the AFK exam! Thank you, Dr. Musthafa, Dr. Neha, and Dr. Ahmed, for your incredible support. Your focused lectures, quizzes, and mocks were invaluable. I couldn't have done it without you. Thank you for being part of this success!",
      "rating": 5,
      // "description": "Student",
      "user": {
        "id": 2,
        "name": "Dr. Muneera Mohayelden",
        "image": "https://example.com/avatar.jpg"
      }
    },
    
    {
      "id": 3,
      "comment": "Moving to a new country and building a career is tough, with AFK as the first hurdle. After being out of dentistry for years, I lacked confidence. Strivers, especially Dr. Mustafa, Dr. Neha, and Dr. Ahmed, helped me realize the exam is doable. Their lectures, quizzes, and guidance were invaluable. I'm deeply thankful for their support and for God's blessings!",
      "rating": 5,
      // "description": "Student",
      "user": {
        "id": 3,
        "name": "Dr. M",
        "image": "https://example.com/avatar3.jpg"
      }
    },
    {
      "id": 4,
      "comment": " I want to thank Dr. Mustafa Sherif and Dr. Neha Charak for their invaluable knowledge. Joining their course was the best decision; it was systematic and focused on key subjects. They emphasized smart learning and were always available to help. I felt confident and prepared on exam day. I highly recommend them. Congratulations to everyone who passed!",
      "rating": 5,
      "description": "Student",
      "user": {
        "id": 4,
        "name": "Dr. Jagriti Verma",
        "image": "https://example.com/avatar3.jpg"
      }
    },
    {
      "id": 5,
      "comment": "Thank you so much, Dr. Mustafa Sherif and Dr. Neha Charak, for being such wonderful mentors. Your precise and thoughtful guidance was a blessing. I passed the AFK on my first attempt thanks to your counseling and teaching methods. Your approach made it manageable to prepare with a family. I’m grateful for your support and feel lucky to have been your student. Your course is outstanding. Congratulations to everyone who passed!",
      "rating": 5,
      // "description": "Student",
      "user": {
        "id": 5,
        "name": "Dr. Haroon Sultan",
        "image": "https://example.com/avatar.jpg"
      }
    },
    {
      "id": 6,
      "comment": "I’m thrilled to share that I passed the AFK on my second attempt! The journey with Dr. Mustafa and Dr. Neha was incredible. They provided updated materials and helpful mocks, and their mnemonics, especially for pharma, were invaluable. Huge thanks to Dr. Mustafa, Dr. Neha, and my supportive husband, who took care of our 5-month-old daughter, allowing me to focus on my studies. ",
      "rating": 5,
      "description": "Student",
      "user": {
        "id": 6,
        "name": "Dr. Shweta Bhatnagar",
        "image": "https://example.com/avatar2.jpg"
      }
    },
    {
      "id": 7,
      "comment": "I’m thrilled to share that I cleared the AFK on my first attempt, thanks to Dr. Mustafa Sherif and Dr. Neha Charak. Their targeted study plans, biweekly lectures, and group discussions were key to my success. Despite having a newborn just before the exam, their support kept me motivated. I highly recommend them for anyone preparing for the AFK—they ensure you give your best!",
      "rating": 5,
      // "description": "Student",
      "user": {
        "id": 7,
        "name": "Dr. Akankssha Sharda",
        "image": "https://example.com/avatar3.jpg"
      }
    },
    
    {
      "id": 8,
      "comment": "Congratulations to everyone! I wholeheartedly thank Dr. Neha and Dr. Mustafa for being wonderful mentors and genuinely kind individuals. Their relentless support and availability made a huge difference. Being part of this positive and generous group was a blessing. Their guidance made the exam much easier. Thanks for being there and providing the right support at the right time!",
      "rating": 5,
      "description": "Student",
      "user": {
        "id": 8,
        "name": "Dr. Ramandeep Kaur",
        "image": "https://example.com/avatar3.jpg"
      }
    },
    {
      "id": 9,
      "comment": "Mustafa and Neha… you’re not only mentors but amazing friend and family to me. I did not know anything about Afk and you share your whole knowledge to us generously. And I have pass it in my first attempt. Sometimes, generally after mock exams (which were so helpful) I thought that I should withdraw February exam and try it in August but you called me and encouraged me. Thank you, thank you,  ",
      "rating": 5,
      // "description": "Student",
      "user": {
        "id": 9,
        "name": "Dr. Özlem Sengezer",
        "image": "https://example.com/avatar.jpg"
      }
    },
    {
      "id": 10,
      "comment": "Thank you Dr Mustafa and Dr Neha for the amazing course we had it was an amazing experience I wouldn't have done it without your guidance and support     I felt more connected with everyone and loved that everyone were able to give it all no selfishness and no weird ideas for being in a competition! I'm really happy I attended the course it was a game changer",
      "rating": 5,
      "description": "Student",
      "user": {
        "id": 10,
        "name": "Dr. Reham Mersal",
        "image": "https://example.com/avatar2.jpg"
      }
    },
    {
      "id": 11,
      "comment": "Thank you so much Dr Mustafa and Dr Neha for your guidance through free zoom meetings during our AFK preparation time. Special thanks to Dr Neha for sending all the articles and books on every single request of mine. Thank you so much Ma’am…..May God bless you",
      "rating": 5,
      // "description": "Student",
      "user": {
        "id": 11,
        "name": "Dr. Jasandeep Kansal",
        "image": "https://example.com/avatar3.jpg"
      }
    },
    {
      "id": 12,
      "comment": "Passed my AFK. Thank you Team Strivers... ",
      "rating": 5,
      "description": "Student",
      "user": {
        "id": 12,
        "name": "Dr. Prathibha Prakash",
        "image": "https://example.com/avatar.jpg"
      }
    },
    {
      "id": 13,
      "comment": "Thank you Dr. Your quiz lectures helped me a lot…Thank god I joined strivers 🙏😊  … ",
      "rating": 5,
      "description": "Student",
      "user": {
        "id": 13,
        "name": "Dr. Prabhjot",
        "image": "https://example.com/avatar3.jpg"
      }
    },
    {
      "id": 14,
      "comment": "Thanks. I passed it because you guys were wonderful!!!! ",
      "rating": 5,
      "description": "Student",
      "user": {
        "id": 14,
        "name": "Dr. Grace",
        "image": "https://example.com/avatar2.jpg"
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
