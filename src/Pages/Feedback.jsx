import React, { useState } from "react";
import { Link } from "react-router-dom";

// Complete Feedback Responses from Swarna Kamal Yoga Center
const feedbackData = [
{
    name: "Naheed Hanif",
    date: "June 3, 2026",
    comments:
      "Feedback of Pilates teacher training course Sangeetha ma’am is one of the sweetest and kindest teacher. I was skeptical about joining this course as firstly i am beginner and secondly i was worried about posture since its online but after the course completion i am glad to have taken the right decision . Ma’am always gives attention to detail to each and every student and never once I felt I can’t do any particular exercise because Ma’am always made sure to break it down and she has loads of patience . Her knowledge on the subject shows how passionate she is about her learning and  teachings . Always motivating us for doing better each n everyday . I can see myself being confident  in performing all the exercises under her expertise . I am happy to have learnt  under her guidance and also sad that I am going to miss the classes and her sweet voice .Thank you ma’am",
    rating: "5 – Excellent ",
  },
  {
    name: "Viji",
    date: "June 5, 2026",
    comments:
      "Where do I even begin? There is so much I have learned from this class that it's difficult to put into words. When I first joined, I wasn't sure if I would enjoy Pilates since it was something completely new to me. However, with a trainer like Sangeetha, those doubts quickly disappeared. Over the course of just one month, I learned lessons that went far beyond Pilates, health, and fitness. I learned the importance of punctuality and showing up consistently. I learned patience by returning to class again and again, even when progress felt slow and challenging. The journey wasn't always easy, but every small improvement, combined with Sangeetha's constant encouragement and motivation, kept me going and gave me confidence to continue. As for our trainer, I've known Sangeetha for almost six years, and throughout these classes she was much more than a coach. She made everyone feel welcome, respected, comfortable, and most importantly, good about themselves. She truly felt like one of us. Thank you so much, Sangeetha, for your guidance, support, and positivity. I wish you all the success and happiness in your career. May the Lord continue to bless you and shower you with endless success. With gratitude,",
    rating: "5 – Excellent ",
  },
  {
    name: "Sanjeevani",
    date: "June 5, 2026",
    comments:
      "What can I say about Sangeeta! I’ve known her personally for a long time, but as a professional this was my first interaction. Her passion for her work is contagious. It makes me question my own discipline. I wonder how she shows up every single day with the same fire! Now coming to the class, it’s been such a learning curve in terms of my fitness journey. There were postures and exercises that felt like impossible in the first attempt. But Sangeeta’s patience and her ability to match a student’s individual capacity kept me motivated. Although it was online class, nothing could escape her keen observation. And she’s been so invested in our progress. The design of the course as well felt very conducive for beginners like me and seasoned practitioners too who were part of the group. And last but not the least, a shout out to all the women in the group. Such a tremendous source of inspiration. Each one, a force of nature in her own might! A power packed Pilates Class indeed! ❤️🙏🏾",
    rating: "5 – Excellent ",
  },
   {
    name: "Renu Adlakha",
    date: "June 5, 2026",
    comments:
      "l would like to express my heartfelt gratitude to Sangeeta Ma'am for her guidance throughout the Pilates TTC course. She is truly an inspiration and a remarkable mentor. Her deep knowledge of the subject, combined with her passion for teaching, made every session valuable and engaging. The way she explained each exercise, along with its modifications and variations, was commendable and helped us understand the concepts thoroughly. I have learned so much from her, not only about Pilates but also about becoming a better instructor. Thank you, Ma'am, for sharing your expertise, motivating us, and making this learning journey so enriching and enjoyable.⭐🙏 With Regards",
    rating: "5 – Excellent ",
  },
  {
    name: "Divya",
    date: "June 3, 2026",
    comments:
      "Feedback for Sangeeta Ma'am – Pilates Teacher Training Course I am truly grateful to Sangeeta Ma'am for her exceptional guidance throughout the Pilates Teacher Training Course. Her teaching approach is professional, well-organized, and easy to follow, making the learning process both enjoyable and effective. Sangeeta Ma'am has a deep understanding of Pilates principles, anatomy, alignment, breathing techniques, and movement patterns. She explains each concept with clarity and patience, ensuring that every student develops a strong foundation in both theory and practical application. What I appreciated most was her encouraging and supportive nature. She was always willing to answer questions, provide constructive feedback, and motivate students to improve their skills and confidence as future Pilates instructors. This course has greatly enhanced my knowledge, teaching abilities, and understanding of mindful movement. The skills and insights I have gained will be invaluable in my professional journey. Thank you, Sangeeta Ma'am, for your dedication, expertise, and continuous support. Your passion for teaching has made this training a truly rewarding and inspiring experience. Best Regards,",
    rating: "5 – Excellent ",
  },
  {
    name: "Meena",
    date: "June 3, 2026",
    comments:
      "Dear Mam💐💐I am meena. As our Pilates Teacher Training classes are coming to an end, I feel a bit sad but deeply grateful. You have been an absolutely amazing teacher! Your way of teaching is incredible, and every instruction you gave was so clear and easy to understand.​This training has been a wonderful opportunity for me to dive deeper into the subject. I am incredibly thankful for your constant support—you were always there to clear our doubts at any time. Also the video clippings you shared have been extremely helpful for our practice. Thank you so much for everything Mam🙏🙏🙏",
    rating: "5 – Excellent ",
  },
  {
    name: "Dee",
    date: "May 23, 2026",
    comments:
      "Dr. Smita Madam has been a truly wonderful female leader and someone who genuinely leads by example. As a woman, yoga teacher, and guide in women’s health and leadership, she embodies deep wisdom, professionalism, generosity, and an exemplary attitude in the way she teaches and shares her knowledge. Throughout this training, she displayed a very complete and profound understanding of yoga in general, while also sharing extensive knowledge about female anatomy, women’s health, modern medicine, Ayurveda, and holistic healing systems. What inspired me deeply was witnessing how these ancient practices of yoga can work hand in hand with modern medicine and traditional healing approaches to support women in such an intelligent, conscious, and powerful way. She also showed us how broad, versatile, and multidimensional the journey of pregnancy yoga truly is — from supporting fertility and conception, to accompanying pregnancy itself, and then the postnatal phase. Each stage requires different tools, understandings, and sensitivities, and Dr. Smita shared so many practices and capacities to truly support women during these deeply transformative moments of life. Her teaching ignited a deep curiosity in me to continue learning and studying further with her in the future. More than knowledge, I feel she genuinely helped me transcend some of my own blockages around confidence, self-trust, and stepping fully into my path as a yoga teacher. Because of her guidance and the generosity of what she shared, I now feel much more confident beginning my journey as a practitioner and teacher of pregnancy yoga. I truly believe the work Dr. Smita is doing is deeply important for women, for children, and for the world. She is not only a yoga teacher, but also a healer, counselor, mentor, and wise woman who touches lives very deeply. Thank you again, Doctor, for this beautiful and transformative experience. I feel more healed, more connected to myself as a woman, more knowledgeable about my body, and more grounded and confident as a teacher. This experience means the world to me, and I am forever grateful. I highly recommend learning and working with Dr. Smita.",
    rating: "5 – Excellent ",
  },
  {
    name: "Sonali",
    date: "May 18, 2026",
    comments:
      "Thank you so much mam...😊 With your exercises, I am pregnant  now(3rd month)...conceived naturally  at 37 age...inspite of having worst obstetric history... Had faith in you'll😊....and did as much as I could.",
    rating: "5 – Excellent ",
  },
  {
    name: "Manju",
    date: "May 15, 2026",
    comments:
      "With Smita ji during the prenatal yoga batch. I’m happy to share my honest and detailed impressions.Her teaching style is calm, patient, and deeply knowledgeable. She explained the purpose of every posture and breathing technique in simple, non-technical language, always relating the practice to pregnancy stages and common discomforts like back pain, pelvic pressure, swelling, and sleep difficulties. I appreciated that she combined practical alignment cues with clear safety guidelinesHi Dr smita madam, It was truly a wonderful experience learning from you. Your explanations are always clear, engaging, and very easy to understand. The knowledge and insights you shared throughout the course were truly remarkable and inspiring. Even while revisiting the video recordings, I am able to gain a deeper understandding because of the way you teach with such clarity and passion. Every session was meaningful and created an enjoyable learning experience for me. ",
    rating: "5 – Excellent ",
  },
  {
    name: "M.s deva",
    date: "May 10, 2026",
    comments:
      "Hi Dr smita madam, It was truly a wonderful experience learning from you. Your explanations are always clear, engaging, and very easy to understand. The knowledge and insights you shared throughout the course were truly remarkable and inspiring. Even while revisiting the video recordings, I am able to gain a deeper understandding because of the way you teach with such clarity and passion. Every session was meaningful and created an enjoyable learning experience for me. ",
    rating: "5 – Excellent ",
  },
  {
    name: "Mounaa Rathodd",
    date: "May 10, 2026",
    comments:
      "Thank you Smeeta madam for spendid teaching style. Way of teaching is too good. I am really thank to ma'am. You teach every topic in detail. Give knowledge more than syllabus. I am curious to learn Your comming soon weight loos class. Thank you ❤️",
    rating: "5 – Excellent ",
  },
  {
    name: "Dietitian Sapna Arora",
    date: "May 10, 2026",
    comments:
      "Thank you Samita Mam for teaching us to learn, How to manage anxiety, stress, insomnia and overthinking without medication. Being the first step of my learning process, I am looking forward to learn many more techniques under your guidance I am so fortunate to hae you as my mentor Regards 🙌",
    rating: "5 – Excellent ",
  },
  {
    name: "Mahathi Gottimukkala",
    date: "May 10, 2026",
    comments:
      "I thank Dr.Smita Ma'am, for sharing the knowleddge of sharing the knowledge and willingness to share what all she knows regarding subject  makes her stand out and make us dive into subject with keen interest to learn. Being tutored by her is a privilege  and make me be more curious to learn.",
    rating: "5 – Excellent ",
  },
  {
    name: "Jigisha Parikh",
    date: "May 10, 2026",
    comments:
      "Thank you, Smita Ma'am for sharing the knowledge of Pranamyama, Mudra, and Meditation with us. This is going to help me in many ways, both personally and for my members. I hope to help them more and more with the knowledge I have received. Always grateful 🙏",
    rating: "5 – Excellent ",
  },
  {
    name: "Ruchi Preg Yoga",
    date: "May 10, 2026",
    comments:
      "Smita Maam is an amazing teacher, extremely knowledgeable and generous in spreading the same...PMM course has been an enriching experience for me as it helped me calm down and reduce stress a lot and I am lloking forward to extend the same benifits to my students...",
    rating: "5 – Excellent ",
  },
  {
    name: "Marc Bestgen",
    date: "May 10, 2026",
    comments:
      "Dr. Smita Ma'am you are an exceptional teacher and an amazing human beging. You teach with so much passion energy, and dedication that every class becomes inpiring and unforgettable. You never rush and always take the time to help explain and guide with incredible patience without ever counting your time. what makes you so special is the way you bring knowledge alive-every detail is explained so clearly deeply, and with genuine enthusiasm. We can truly feel how much you love teaching and how much you care about your students undwerstanding and progress. Your kindness, wisdom. and positive energy create such a motivating and beautiful atmosphere to learn in. Learning from you is not just studying a subject it is an inspiring exprience filled with encouragement, passion, and confidence. I feel truly grateful and lucky to have you as a teacher. Thank you Ma'am crossing your life rode is a blessing 🙏 Marc ",
    rating: "5 – Excellent ",
  },
  {
    name: "Nishtha",
    date: "May 10, 2026",
    comments:
      "Dear Smita Ma’am,  Learning from you has truly been a beautiful and enriching experience for me. Your depth of knowledge, clarity in teaching, and genuine passion for sharing wisdom make every session inspiring and transformative. What touched me the most was the way you teach with such openness, patience, and dedication, making even complex concepts feel simple and meaningful.  The PMM course has not only deepened my understanding of Pranayama, Mudras, and Meditation, but has also helped me personally in creating more calmness, awareness, and balance in life. I feel truly fortunate and grateful to have learned under your expert guidance.  Thank you for being such an exceptional teacher and mentor. May Goddess Saraswati continue to bless you abundantly with divine wisdom, good health, and the ability to keep illuminating countless lives through your knowledge. With heartfelt gratitude and respect 🙏 Nishtha",
    rating: "5 – Excellent ",
  },
  {
    name: "Sophie Lieven",
    date: "May 10, 2026",
    comments:
      "Thank you, Dr Smita Ma'am, it was a real pleasure to learn with needs to be knows, and it was reall helpful to practice under you expert guidance. I also appreciate that you leave the videos accessible for a few more months, it will be really helpful to watch them again as the material was really comprehensive. i am really honored to have been able to learn the subjecty of mudras, pranayama and meditation with such a passionate and enthusiastic teachers and hope that i will be able to follow other course with you ❤️",
    rating: "5 – Excellent ",
  },
  {
    name: "Anusha P",
    date: "Aug 15, 2023",
    comments:
      "Swarna Kamal is a good choice for the students who want to become a yoga trainers. Smitha ma'am and Saritha ma'am are experienced and knowledgeable trainers.the material was provided with more information helps us a lot.i am so grateful for your guidance and support. Thank you both of you🙏🙏.",
    rating: "4 – Good",
  },
  {
    name: "Dharani",
    date: "Aug 14, 2023",
    comments:
      "Smitha ma'am and saritha ma'am both are excelent trainers. They tell us to understand Each and every topic. Both of them did the assengments correction with patience.Iam satisfied.thank u so much saritha ma'am and Smitha ma'am 😊☺️",
    rating: "5 – Excellent",
  },
  {
    name: "Sivakami",
    date: "Aug 14, 2023",
    comments:
      "Very nice session and after ur class I get more materials, knowledge and alfo clarity of poses…And I'm happy that now I'm taking 2 therapy classes ..thank u Smitha mam and Sarita mam.. particularly I'm enjoying the anotomy class",
    rating: "5 – Excellent",
  },
  {
    name: "Sameera",
    date: "Jul 21, 2023",
    comments:
      "Hi, this is Sameera I have taken prenatal yoga classes with Smitha ji which helped me a lot for normal delivery. Myself and my family members are very happy with my delivery. We are blessed with baby girl Both of us are doing good. Thank you soo much Smitha ji for your classes and teachings means a lot😊",
    rating: "5 – Excellent",
  },
  {
    name: "Shabanaa",
    date: "Jul 17, 2023",
    comments:
      'I started my yoga with Smitha in the year 2020. Initially started with Ashtanga yoga, enjoy dynamic exercises and physical challenges with her extraordinarily talented that made me join power yoga and pilates. I use to attend 3 classes in a week and Smitha keeps sharing useful information in each and every classes. She had solution through mudras for all type of issues. Her care, dedication and passion towards yoga is been carried from her ancestor which helped me get more knowledge from each of her session. Also group/ individual everyone are been treated in same way. Later I started my prenatal yoga from week 5 of my pregnancy with meditation which includes anxiety/claiming technics. She also has a certified nutrition to guide what to eat and what not. She also has knowledge about week-by-week asanas and which postures should be done and not to be practice as the week goes during pregnancy. Her breathing technics which she thought me till week 37 helped my delivery go smooth and easy. Overall she is "THE BEST" yoga trainer I have ever seen.',
    rating: "5 – Excellent",
  },
  {
    name: "Divya Rao",
    date: "Jul 17, 2023",
    comments:
      "Dear Smitha I wanted to express my gratitude for the amazing meditation classes you conducted during my pregnancy. I truly appreciated your expertise, knowledge, and the caring approach you took to support me throughout this journey. The classes allowed me to relax, de-stress, and connect with my baby on a deeper level. Your calming voice and guided meditations helped me release tension and anxiety, which made a significant difference in how I experienced my pregnancy. I also appreciated the personalized approach you took, tailoring each session to my specific needs and adjusting as needed. The techniques I learned have helped me throughout my pregnancy and will continue to benefit me post-partum. Thank you again for your invaluable guidance and support during this special time of my life. I am grateful to have been able to share this experience with you.",
    rating: "5 – Excellent",
  },
  {
    name: "Sukeerthi",
    date: "Jun 09, 2023",
    comments:
      "I really enjoyed the sessions. The meditations and poses really helped me during the last month of pregnancy. Smita is a great instructor- very supportive, motivating and constantly checked in and prayed for baby.",
    rating: "5 – Excellent",
  },
  {
    name: "Anu",
    date: "May 3, 2023",
    comments:
      "I took my prenatal yoga sessions with Smita.. She is extremely knowledgeable and she was very concerned about her clients health and body conditions.. She keeps record of all our problems, our progress, health records and gives us instructions accordingly.. My delivery was almost painless because of prenatal yoga.. I am glad I took prenatal yoga sessions during my pregnancy, I would suggest Swarna Kamal to anyone who is interested in prenatal yoga..",
    rating: "5 – Excellent",
  },
  {
    name: "Medha Joshi",
    date: "Apr 1, 2023",
    comments:
      "Ms. Smita is very kind and professional prenatal yoga teacher. I attended her offline yoga sessions during my first pregnancy. The utmost care and personal attention she gives made me choose her online classes even in my second pregnancy. Her online classes were equally effective. She made my both the pregnancy journeys smooth and enjoyable. A special thanks to Smita.",
    rating: "5 – Excellent",
  },
  {
    name: "Usha",
    date: "Mar 12, 2023",
    comments: "Excellent",
    rating: "5 – Excellent",
  },
  {
    name: "Rabia",
    date: "Sep 28, 2022",
    comments:
      "Smitha is one of the finest and the best yoga trainer. She takes the real pain for you and prepares herself very well before every session. Who will take the pain to remind you – 'Do the asanas please?'. Yes, she does…Not only during the course of my session but also after I stopped taking the classes. She used to text me like an elder sister – do these asanas/mudras. I feel blessed to have her as my mentor during the pregnancy. Thank you so much Smitha! Stay blessed and happy always😀",
    rating: "5 – Excellent",
  },
  {
    name: "Uma",
    date: "Sep 12, 2022",
    comments:
      "I joined Smitha 's online pregnancy classes .she is so encouraging and and she taught mudras according to the health condition which definitely helped a lot and was able to recover from those health issues . I never had any kind of pain before and after pregnancy and was able to recover faster as well. Thank you Smita..for making my pregnancy journey so smooth.I strongly recommend to everyone far and wide.",
    rating: "5 – Excellent",
  },
  {
    name: "Manasa.A",
    date: "Sep 1, 2022",
    comments:
      "I trained with Sarita Mam in Face Yoga course and she was amazing! Face Yoga is very useful. This makes them look not only beautiful but also young. She is a pleasure to work with. Love her dedication to her students. Thank you Sarita Mam",
    rating: "5 – Excellent",
  },
  {
    name: "Shabanaa Imthiyas Basha",
    date: "Jun 23, 2022",
    comments:
      "Smitha is THE BEST yoga trainer. She is very helpful and knowledgeable. Her experience is clearly shown throughout the training session. I started as a beginner then moved to prenatal yoga and now Pilates. Also she always keeps updating herself and shares the knowledge to her students. She also has solutions through mudras for all kinds of problems. Thank you so much Smitha no matter who says what you r THE BEST. No words can be described how much your training and mudras helped me save my life.",
    rating: "5 – Excellent",
  },
  {
    name: "Monica Sharma",
    date: "Jun 21, 2022",
    comments:
      "Our trainer, Smita is a very learned, talented and a passionate teacher. She loves what she does, and she has definitely made a positive impact on my life! Thanks for making me enjoy Yoga so much! 🥰",
    rating: "5 – Excellent",
  },
  {
    name: "Ananya",
    date: "Jun 16, 2022",
    comments:
      "Smita is great to work with and very good at tailoring sessions based on each person. Her sessions push you beyond what you think you're capable of but never more than what you can handle. Her experience and knowledge definitely makes her sessions unique and worth it.",
    rating: "5 – Excellent",
  },
  {
    name: "Srujana",
    date: "May 1, 2022",
    comments:
      "I had a wonderful journey with Smita in prenatal yoga. She taught me mudras and asanas which gave me great relief from pains, helped me to be stress free and built confidence during pregnancy and labour time. She has vast knowledge in this area and efficient in conducting prenatal yoga sessions. Thank you for being there with me. I am grateful to have found Smita and my journey won't stop here with her.",
    rating: "5 – Excellent",
  },
  {
    name: "Manasa.A",
    date: "Apr 19, 2022",
    comments:
      "Every teacher is a one of the part of human's life. But recently I found a new one. Smita mam is a very professional yoga instructor and teaches very nicely. She has dedicated herself to yoga. I have completed 200hrs TTC Course from Smita mam. I must say it has been wonderful learning from her. She takes are to note our mistakes and correctly helps us rectify it. Lot of teachers explain just subject only but her explaining is next level in yoga with excellent practical classes. She is not only yoga teacher, she finds the poor people & helping to educational aspects with out any selfish mind. Thank you madam🙏🙏🙏.",
    rating: "5 – Excellent",
  },
  {
    name: "Shilpy",
    date: "Apr 8, 2022",
    comments:
      "Smita's yoga classes was one of the things that I looked forward to during my whole pregnancy as after every class I felt more energy, strength, positivity and calmness. Smita has extensive knowledge about which asanas or mudras to perform for specific issues or pain that everyone experiences during pregnancy. Also the best part was that the yoga classes helped me gain only required amount of weight and it took me no time to loose the weight after delivery I was back to my pre pregnancy weight in just 2 weeks. I would highly recommend Smita for pregnancy yoga.",
    rating: "5 – Excellent",
  },
  {
    name: "Sangeetha Vijay",
    date: "Mar 15, 2022",
    comments:
      "Happy B'day Smita ! It has been a year in this yoga journey for me and I am so blessed to have you as my instructor ! Yoga has immensely helped me to improve my flexibility & balance and to manage stress. I love the structure of your class – Cardio, stretches, Meditation and Breathing – Covers it all ! Thank you for coaching my 11 year old too. In addition to asanas for stretching , he says the mudras and meditation techniques really help him manage pre-game anxiety. Smita, you are an amazing yogini and are really good at what you do ! Keep up the good work !",
    rating: "5 – Excellent",
  },
  {
    name: "Meenakshi",
    date: "Sep 09, 2021",
    comments:
      "I have been doing Yoga sessions with Smita for the past 7 months. She is truly passionate and energetic and brings that to the class and pushes us to do better. Smita is very dedicated and highly knowledgeable and goes above and beyond to help her students to achieve their goals . I’m truly thankful to have found a teacher like Smita and would highly recommend her to anyone who wants to learn yoga . Wishing her and the team all the success in all her future endeavors .",
    rating: "5 – Excellent ",
  },
  {
    name: "Archana Sarangi",
    date: "Sep 09, 2021",
    comments:
      "Since I have started online sessions with Swarnakamal, my trainer Smita has motivated me in various ways. Really appreciate her efforts to always put that extra inch which has increased my flexibility and strength in just few mnths.",
    rating: "5 – Excellent ",
  },
  {
    name: "Vishwanath G",
    date: "Sep 09, 2021",
    comments:
      "I know most of the trainers. They are dedicated and have abundance knowledge, experience in their domain. Smita is my mentor and yoga guru. She is a great master and knows everything about everything. Happy to see this website providing all necessary details and wish the team a grand success in their endeavours 🙏",
    rating: "5 – Excellent ",
  },
  {
    name: "Nirmala",
    date: "	Sep 09, 2021",
    comments:
      "Smita Mam is an excellent yoga Guru for me and my son. We didn’t know anything about yoga before joining with swarna kamal. Now we learnt a lot of things from Smita Mam. Thanks a lot for Taught so many things. We are blessed to get a Guru like you. You make me more confidence and get inner peace through yoga, mudra, prnayama, meditation. You are The best one. I wish and pray swarna kamal should Reach more High with sounds. Thank you once Again smita mam.",
    rating: "5 – Excellent ",
  },
  {
    name: "Nithi",
    date: "Sep 10, 2021",
    comments:
      "Smitha mam was introduced to me by my friends from US. Their feedback impressed me. I have been learning for past 3 months. Now my body has become more flexible 😀 . Never thought I could do these many Asanas now. I had knee pain before doing yoga, now no pain and my body has become fit. Thank you Smitha for your wonderful teaching and the way she carries the class is also amazing. Pranayama and Mudras teaching and especially the Prenatal class is also too good. She arranges many seminars with Doctors and Nutritionists also. Other than session she also posts the benefits of Asanas,Mudras and Pranayama too. The course fee is also nominal. Keep up your good work🙏🙏. Blessed to have her as our Yoga Guru🙏.",
    rating: "5 – Excellent ",
  },
  {
    name: "Aparna",
    date: "Sep 10, 2021",
    comments:
      "Smitha is one-of-a-kind teacher who recognises each student and adapts her classes to serve all levels. Her classes have a patient and thoughtful sequence that helps you feel confident and move safely through poses. I would recommend her to any person wanting to learn more about yoga, or about themselves!!!",
    rating: "5 – Excellent ",
  },
  {
    name: "Priya Kalpathy",
    date: "Sep 11, 2021",
    comments:
      "I have been learning yoga from Smita for about 8 months now. I absolutely love her classes. She is the real deal when it comes to her in-depth knowledge of yoga. In addition, she is well versed in the use of mudras for every ailment and advocates meditation. She goes the extra mile to get guest speakers from time to time, which speaks of her genuine interest in her students. I have gotten progressively flexible and I can say that some of my personal health issues have improved significantly with the practice of yoga. I truly love it:-) I highly recommend Smita and SwarnaKamal for anybody considering ‘Yoga’ to improve your health. You will not be disappointed.",
    rating: "5 – Excellent ",
  },
  {
    name: "Jayasree",
    date: "Sep 11, 2021",
    comments:
      "Smita is very passionate about practicing and teaching Yoga. Her dedication, determination and devotion is something each of her students can vouch for. She is very professional in her approach and cordially teaches across all age group people. Smita always shows an optimistic approach to any emotional/ physical issue and would take dedicated time to research about it and share her knowledge. I wish her success in all her endeavours. Loka samastha sukhino bhawantu, sarve jana sukhinobhawantu.",
    rating: "5 – Excellent ",
  },
  {
    name: "Kousika R",
    date: "Sep 11, 2021",
    comments:
      "I m very happy that I found swarnakamal yoga centre. I m really satisfied withthe training and exercise that is taught. It is really worth the money. And looking forward to continue the yoga journey.",
    rating: "5 – Excellent ",
  },
  {
    name: "Smitha Hegde",
    date: "	Sep 12, 2021",
    comments:
      "I started my yoga journey with Smita around 2018. She has been an exceptional mentor and motivator.Be it offline or online classes she makes sure that her students are doing properly asanas , mudras or pranayamas with her personal touch . All the best to Smita for all her future ventures 👍",
    rating: "5 – Excellent ",
  },
  {
    name: "Ridesh",
    date: "Sep 12, 2021",
    comments:
      "What it started as a one-off trail class is part of my lifestyle now and the credit goes to Smita. Her immense knowledge in Yoga combined with selfless motive to spread it to communities for their well being is what makes her unique. Flexibility is key as we grow older and I find her classes having the right mixture of stretching, strengthening and breathing exercises to achieve it. Yoga is a journey, and I am happy that I found a right tutor/center to continue that journey. All the very best.",
    rating: "5 – Excellent ",
  },
  {
    name: "Angie Goh",
    date: "Sep 13, 2021",
    comments:
      "My trainer is Smita and I’m from Singapore . I really enjoy the online yoga sessions. My yoga steps were corrected carefully via online sessions . I also received extra notes and pictures about yoga steps regularly. I do online face yoga with trainer Sarita . My friends and I felt that our face is firmer n has slim down. Thank you both dedicated teachers.",
    rating: "5 – Excellent ",
  },
  {
    name: "Vidya",
    date: "Sep 13, 2021",
    comments:
      "I’m practicing yoga under the guidance of Smita from past 2 years. She has been amazing yoga guru, I must say. My body has become more flexible only because of the way Smita motivates me and pushes me to do beyond my level. Infact, she motivates and corrects postures of each and every student. Her dedication to work and her wise knowledge in yoga asanas, mudras, meditation is highly appreciable. She also explains use of asanas and mudras in daily classes so we can get more health benefits. She also responds to everyone health issues and sessions are conducted accordingly. Overall, I will suggest Smita as yoga guru for someone who is looking to practice yoga for physical and mental health. I wish all the best to Smita and her team. You guys are doing great work, keep going👍",
    rating: "5 – Excellent ",
  },
  {
    name: "Shefali Munjal",
    date: "Sep 14, 2021",
    comments:
      "I have been doing yoga with Sarita Sahu for few months now and it has been a wonderful experience so far. She is very experienced and meticulous. I enjoy my sessions to the fullest 🙂",
    rating: "5 – Excellent ",
  },
  {
    name: "Satish Kalpathy",
    date: "	Sep 16, 2021",
    comments:
      "I tried BIKRAM yoga back in 2014. Gave up after 6 months, at most 2 classes per week. Temperature got to me, more than anything plus the drive… I started again with Smita via zoom, back in April-May 2021, and wasn’t sure how yoga would work especially if the instructor can’t make it personal, help/guide you, correct your posture etc. In my 5th month, I can see multiple benefits – body is more supple, the back pains have reduced, you get into a more balanced diet, try to sleep more hours, natural remedy to known conditions and a better prevention for the yet-to-come. There is post-yoga–body-pain, sometimes more than usual, but a good pain. This is a long process, one that’s worth the journey. Doing it with old & new friends, with a caring and passionate instructor is added motivation to embrace Yoga as a lifestyle. Wish I had known Smita much earlier. She pushes us outside the comfort zone, and I appreciate it. She makes it fun, and feedback is instantaneous. You will be treated as a fair student and expected to improve. So if you are willing to put in the effort and hours, get in – YOU WON’T REGET IT!.",
    rating: "5 – Excellent ",
  },
  {
    name: "Nithya",
    date: "Sep 17, 2021",
    comments:
      "I have been learning yoga from Smita for the past 7 months and i must say it has been wonderful learning from her. She takes care to note our mistakes and correctly helps us rectify it. I joined with certain physical ailments and can say that i find drastic improvements in my health conditions ,doing yoga. Kudos to smita and her team (Neeharika & Sangeeta – both excellent teachers as well) and wishing them to achieve more laurels.",
    rating: "5 – Excellent ",
  },
  {
    name: "Shiwangi Gupta",
    date: "Sep 17, 2021",
    comments:
      "Smita is a very good yoga instructor and teaches very nicely. I have not expected that online classes also can be so effective and good. In online classes also she teaches each and every step very lucidly like physical class. I enjoy learning yoga under her. Thanks for you support and guidance.🙏🙏",
    rating: "5 – Excellent ",
  },
  {
    name: "Madana Kaviya",
    date: "Sep 18, 2021",
    comments:
      "Smita mam is an excellent yoga teacher.She has dedicated herself to Yoga. She is a book of knowledge I am practicing yoga with her from past 5 years.. I can see the strengthening and development in myself.",
    rating: "5 – Excellent ",
  },
  {
    name: "Gracy Gollapadi",
    date: "Sep 20, 2021",
    comments:
      "I’ve been training with Smita for almost 8 months now, and believe she is one of the most experienced & committed Yoga trainers around. I started doing Yoga a minimum of 4 times a week, as part of a group session, really enjoyed the variety of Asanas, Mudras, and Pranayamas she taught us in the sessions & then corrected each individual to do their best. Smita is focused on helping us achieve our best physical and mental health growth and makes every session challenging and fun. My health has improved noticeably. I find I actually look forward to my Yoga sessions. I enjoy my sessions with Neeharika and Sangeetha as well. They are both at their best in training us with giving all minute to elaborate details on each posture and its importance. The sessions come with a blend of Mindfulness, Fitness, and Yoga activities which are significant components of a Good healthy life. The team is extremely reliable & punctual. I thoroughly enjoy practicing Yoga and would recommend Smita & her team to anyone looking to improve their mental and physical health with a dedicated group of trainers. Thanks for all the good work Smita, Neeharika and Sangeetha 🙂 All the very best! Glad to be part of the team. – Gracy",
    rating: "5 – Excellent ",
  },
  {
    name: "Aparna",
    date: "Sep 21, 2021",
    comments:
      "Sarita is an amazing teacher and does courses tailored to your needs.",
    rating: "5 – Excellent ",
  },
  {
    name: "Kushala",
    date: "Sep 22, 2021",
    comments:
      "I took classes for anxiety relief from Sarita mam. She suited to my mindset. I can never forget the warmthness that she extends.",
    rating: "5 – Excellent ",
  },
  {
    name: "Lathika Nair",
    date: "Sep 22, 2021",
    comments:
      "I took classes for anxiety relief from Sarita mam. She suited to my mindset. I can never forget the warmthness that she extends.",
    rating: "5 – Excellent ",
  },
  {
    name: "Lathika Nair",
    date: "Sep 22, 2021",
    comments:
      "Sarita came as a blessing to me. She is just perfect for beginners. I love her dedication and knowledge about yoga. At the end of every class I feel a sense of relaxation and peace. Thank you Sarita!",
    rating: "5 – Excellent ",
  },
  {
    name: "Karthica",
    date: "	Sep 22, 2021",
    comments:
      "I’ve been under the training of Saritaji. I have nothing but the best to talk about her. Her patience, her way of explaining the importance of each pose, her ways of walking me through meditation and much more, are all a blissful experience! She never rushes me throughout each session. She understands my limitations and avoids asanas that can hurt me. She knows exactly when to push me to do more without causing much discomfort. Her pleasant and welcoming smile is what motivates me, although my schedule with her is at the end of my day! Heartfelt gratitude to everyone at Swarnakamal Yoga Center 🙏🙏🙏",
    rating: "5 – Excellent ",
  },
  {
    name: "Renuka",
    date: "Sep 23, 2021",
    comments:
      "My Kids are Learning Yoga under Sarita. I really appreciate your Enthusiasm for Teaching and Preparedness you Bring to the Yoga. very passionate about practicing and Teaching Yoga for Kids Your class always feels very Thoughtful and Kids Enjoy a lot You give Individual Attention to Each Student and check each Student’s Pose and Correct them ,it feels like its live session. Thanks a lot. All The Very Best for Your Future Endeavors.",
    rating: "5 – Excellent ",
  },
  {
    name: "Renuka",
    date: "Sep 23, 2021",
    comments:
      "Smita is an Excellent Yoga Teacher, Very Enthusiastic, She is a Book of Knowledge Very passionate about Teaching Yoga and dedicated Very Professional, Optimist and Brave. She Explains Mudras, Pranayama, Asanas with Health Benefits. She Responds and Provide the Exact Asana/Mudra depends on the Health issues of Individual. Excellent Yoga Trainer. All The Very Best To Swarna Kamal Yoga Center.",
    rating: "5 – Excellent ",
  },
  {
    name: "Rajkumari Baraiya",
    date: "	Sep 24, 2021",
    comments:
      "Me n my daughter has learned yoga from Smita mam.She is a very good yoga trainer.She is very enthusiastic n hard working.My daughter likes her very much, her way of teaching is very good. Thank u Smita mam n all d best👍 ",
    rating: "5 – Excellent ",
  },
  {
    name: "Soumyarup",
    date: "Sep 24, 2021",
    comments: "You really supported and shaped my son. Thanks a lot.",
    rating: "5 – Excellent ",
  },
  {
    name: "Manju",
    date: "Sep 27, 2021",
    comments:
      "I am associated with Swarna Kamal ( mentor Smita ) from last 5 years . Her guidance in meditation and pranayam is splendid. She helped me in changing my routine for my betterment , which gradually led me to find time for myself and my body. All this has been a life changing experience and has strengthened my spirit. I am very grateful to Smita for giving me the best of her guidance, time , efforts and for always being there for me . Along with sprouting the seed of self love , Smita also has cured most of physical distress and other health conditions like thyroid. It is very difficult to find a mentor who understands her students and guides them in the best way possible ! Thank you Smita !",
    rating: "5 – Excellent ",
  },
  {
    name: "Pulipati Aparna Deepika",
    date: "Oct 09, 2021",
    comments:
      "Smita is very good trainer, Before I never heard àbout the this kind of yoga for the pregnancy women’s. Finally one of my friend she recommended and encouraged me to do this course,So finally I made it and completed. I hope this is the good opportunity to prove myself as a certified trainer at work places. And I will definitely recommend to my friends to do this course. Thank you ma’am for your support.",
    rating: "5 – Excellent",
  },
];

const Feedback = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter feedback based on search
  const filteredFeedback = feedbackData.filter(
    (feedback) =>
      feedback.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.comments.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.date.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-full font-sans overflow-x-hidden pt-16 bg-white">
      {/* ── HEADER SECTION ── */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-linear-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-600 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3">
            Student Reviews
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-5">
            Feedback Responses
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Read what our students have to say about their transformative yoga
            journey at Swarna Kamal Yoga Center
          </p>
        </div>
      </div>

      {/* ── SEARCH BAR ── */}
      <div className="py-6 px-4 sm:px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <input
            type="text"
            placeholder="Search by name, date, or feedback..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-xl mx-auto block px-5 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none text-sm sm:text-base"
          />
          <p className="text-center text-green-600 text-sm mt-3">
            Showing {filteredFeedback.length} of {feedbackData.length} feedbacks
          </p>
        </div>
      </div>

      {/* ── TABLE SECTION ── */}
      <div className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto shadow-md rounded-lg border border-gray-200">
            <table className="w-full bg-white">
              <thead className="bg-amber-500 text-black">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider w-1/6">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider w-1/6">
                    Received On
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider w-7/12">
                    Comments
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider w-1/6">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black">
                {filteredFeedback.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-12 text-center text-black"
                    >
                      No feedback found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredFeedback.map((feedback, index) => (
                    <tr
                      key={index}
                      className={` transition-colors ${
                        index % 2 === 0 ? "" : ""
                      }`}
                    >
                      <td className="px-6 py-5 text-sm font-semibold text-gray-900">
                        {feedback.name}
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600">
                        {feedback.date}
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-700 leading-relaxed">
                        {feedback.comments}
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold ${
                            // feedback.rating.includes("5")
                            feedback.rating?.includes("5")
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {feedback.rating}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {filteredFeedback.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No feedback found matching your search.
              </div>
            ) : (
              filteredFeedback.map((feedback, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">
                        {feedback.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {feedback.date}
                      </p>
                    </div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs  ${
                        // feedback.rating.includes("5")
                        feedback.rating?.includes("5")
                          ? " text-black"
                          : " text-black"
                      }`}
                    >
                      {feedback.rating}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {feedback.comments}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ── CTA SECTION ── */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-linear-to-br from-amber-50 to-orange-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Our Yoga Community
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            Experience the same transformation. Book your free trial class
            today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-1 transform text-sm sm:text-base"
            >
              Book Free Trial →
            </Link>
            <Link
              to="/"
              className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-bold px-8 py-4 rounded-full transition-all text-sm sm:text-base"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-stone-800 mt-10 pt-4 mb-8 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Swarna Kamal Yoga Center, Bengaluru. All
        rights reserved.
      </div>
    </div>
  );
};

export default Feedback;
