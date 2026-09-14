const legends = [
            { name: "Swami Vivekananda", img: "https://m.media-amazon.com/images/I/61y2Y6QL8PL._AC_UF894,1000_QL80_.jpg",
              bio: ["Indian monk and philosopher.", "Born in 1863 in Kolkata.", "Key figure in introducing Vedanta to West.", "Chicago speech of 1893 is historic.", "Founded Ramakrishna Mission.", "Believed in youth empowerment.", "Stressed on character-building education.", "Promoted universal brotherhood.", "Wandering monk of India.", "Disciple of Ramakrishna Paramahansa.", "Bridge between science and spirituality.", "Died at the young age of 39.", "Birthday is National Youth Day.", "Modern icon of Hinduism.", "Symbol of wisdom and peace."] },
            
            { name: "APJ Abdul Kalam", img: "https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg", 
              bio: ["11th President of India.", "The 'Missile Man' of India.", "Born in Rameswaram, Tamil Nadu.", "Aerospace scientist at ISRO/DRDO.", "Key role in Pokhran-II tests.", "Awarded Bharat Ratna in 1997.", "Author of 'Wings of Fire'.", "Inspiration to millions of students.", "Known for extreme simplicity.", "Believed in 'Vision 2020'.", "Loved playing the Veena.", "A true teacher and orator.", "Died while lecturing in Shillong.", "Man of deep integrity.", "Most loved Indian President."] },
            { name: "Mahatma Gandhi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7Ny0yJlzgxVt584QaK7THS9tDPauCqvZXg&s", 
              bio: ["Father of the Indian Nation.", "Leader of Non-Violent struggle.", "Born in Porbandar, 1869.", "Pioneer of Satyagraha concept.", "Led the historic Dandi March.", "Promoted Khadi and self-reliance.", "Lived in a simple Ashram.", "Fought against untouchability.", "Global icon of peace.", "Inspired Mandela and MLK Jr.", "Believed in simple living.", "Advocate of Truth (Satya).", "Assassinated in 1948.", "International Day of Non-Violence (Oct 2).", "Eternal symbol of freedom."] },
            { name: "Albert Einstein", img: "https://cdn.britannica.com/09/75509-050-86D8CBBF/Albert-Einstein.jpg?w=400&h=300&c=crop",
              bio: ["Greatest theoretical physicist.", "Developed Theory of Relativity.", "Famous for E=mc² equation.", "Nobel Prize in Physics (1921).", "Born in Germany, 1879.", "Father of modern physics.", "Advocated for world peace.", "A brilliant violin player.", "Escaped Nazi regime to USA.", "Imagination over knowledge motto.", "Failed early entrance exams.", "Offered Israel's Presidency.", "Name is synonym for genius.", "Changed our view of Universe.", "Iconic personality and humor."] },
            { name: "Steve Jobs", img: "https://substackcdn.com/image/fetch/$s_!KyAI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9854bcd4-3429-4341-823c-36af4f25f7cb_1000x500.jpeg", 
              bio: ["Co-founder of Apple Inc.", "Visionary of digital age.", "Pioneer of personal computer.", "Introduced iPhone and iPad.", "Known for design perfection.", "Started in parents' garage.", "Founded Pixar Animation.", "Master of marketing skills.", "Stanford speech icon (2005).", "Stay Hungry, Stay Foolish mantra.", "Visited India for spirituality.", "Practiced Zen Buddhism.", "Revolutionized music with iPod.", "Fought cancer with grit.", "Changed how we live today."] },
            { name: " Nelson Mandela", img: "https://i0.wp.com/karsh.org/wp-content/uploads/2017/02/Yousuf-Karsh-Nelson-Mandela-1990.jpg?fit=234%2C300&strip=none&ssl=1",
              bio: ["South African anti-apartheid hero.", "First Black President of SA.", "Prisoner for 27 long years.", "Nobel Peace Prize winner (1993).", "Symbol of forgiveness/peace.", "Leader of African National Congress.", "Known as 'Madiba' fondly.", "Inspired by Gandhi's path.", "Promoted equality for all.", "Lawyer turned revolutionary.", "Wrote 'Long Walk to Freedom'.", "Global icon for human rights.", "Ended racial segregation.", "Died in 2013 at age 95.", "Beacon of hope and justice."] },
            { name: "Elon Musk", img: "https://www.investopedia.com/thmb/sFi7zDFVLekmI6JiMcrLsNOyKAU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-elon-musk-became-elon-musk_final-43ef802cd2414d14a8bf3967f319ce18.png", 
              bio: ["CEO of Tesla and SpaceX.", "Visionary behind Mars colony.", "Richest person in modern history.", "Founded PayPal and Neuralink.", "Self-taught rocket scientist.", "Reinvented electric cars.", "Owner of X (Twitter).", "Master of First Principles thinking.", "Working for sustainable energy.", "Aims to save human consciousness.", "Launched Starlink satellite web.", "Born in South Africa (1971).", "Known for 100-hour work weeks.", "Real-life 'Iron Man' inspiration.", "Shaping future of technology."] },
            { name: "Maerie Curi", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Marie_Curie_%281900%29.jpg/250px-Marie_Curie_%281900%29.jpg", 
              bio: ["Pioneer in Radioactivity.", "First woman Nobel winner.", "Won Nobel in Physics & Chemistry.", "Discovered Radium and Polonium.", "Born in Poland in 1867.", "Professor at University of Paris.", "Dedicated life to science.", "X-ray units hero of WWI.", "Never patented work for profit.", "Symbol of women in STEM.", "Notebooks are still radioactive.", "Died of radiation exposure.", "Buried in the Pantheon.", "Mother of a Nobel winner.", "Ultimate icon of scientific grit."] },
            { name: "Abraham Lincoln", img: "https://cdn.britannica.com/23/62223-050-D8BF8591/President-Abraham-Lincoln-painting-George-Healy-1887-National-Portrait-Gallery.jpg?w=400&h=300&c=crop", 
              bio: ["16th US President.", "Abolished slavery in America.", "Preserved Union during Civil War.", "Gettysburg Address is legendary.", "Born in a poor log cabin.", "Self-educated lawyer/leader.", "Known as 'Honest Abe'.", "Faced multiple early failures.", "Master orator and thinker.", "Assassinated in 1865.", "Face on penny and $5 bill.", "Man of moral conviction.", "Greatest US President often rated.", "Leader of Republican Party.", "Voice of democratic values."] },
            { name: "Srinivasa Ramanujan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCbNlLt0_EDsc5Jk6NwCVx_94_K09jhA_Zw&s", 
              bio: ["Indian mathematical prodigy.", "The man who knew infinity.", "Born in Tamil Nadu, 1887.", "Discovered 3900+ math results.", "Sent work to G.H. Hardy.", "Fellow of Trinity College.", "Hardy-Ramanujan number (1729).", "Strictly vegetarian in UK.", "Goddess Namagiri was his muse.", "Revolutionary number theory.", "Died at the young age of 32.", "National Math Day on birthday.", "Work used in black holes today.", "Untrained yet world-class.", "Pride of Indian science."] },
            { name: "Ratan Tata", img: "https://kenthospitals.com/wp-content/uploads/2024/10/Ratan-Tata.jpg", 
              bio: ["Chairman Emeritus, Tata Sons.", "Global business visionary.", "Symbol of ethics and trust.", "Acquired JLR and Corus.", "Launched the Tata Nano car.", "Gives 65% profit to charity.", "Awarded Padma Vibhushan.", "Licensed pilot and dog lover.", "Mentor to Indian startups.", "Humility personified leader.", "Stood by staff during 26/11.", "Created global brand identity.", "Investor in social causes.", "Inspiration for entrepreneurs.", "Respected Indian elder."] },
            { name: "Subhash Chandra Bose", img: "https://i.pinimg.com/564x/9a/d5/3d/9ad53d61d329393d4d64ca836c647ffd.jpg", 
              bio: ["'Netaji' of Indian freedom.", "Founded Azad Hind Fauj (INA).", "Slogan: 'Jai Hind' creator.", "Escaped house arrest to Germany.", "Challenged British military power.", "Believe in armed struggle.", "Born in Cuttack, 1897.", "Resigned from ICS for India.", "Leader of forward thinking.", "Sought global help for liberty.", "Brave heart of nationalism.", "Death remains a grand mystery.", "Inspired millions to fight.", "Supreme commander of INA.", "Hero of Indian patriotism."] },
            { name: "Mother Teresa", img: "https://i.guim.co.uk/img/media/5f90219b0759f3159c2f085979050effa8aa4751/0_51_1705_2131/master/1705.jpg?width=445&dpr=1&s=none&crop=none", 
              bio: ["Saint of the Gutters.", "Founder, Missionaries of Charity.", "Nobel Peace Prize (1979).", "Served poor in Kolkata slums.", "Born in Albania (1910).", "Symbol of global compassion.", "Established homes for dying.", "Bharat Ratna awardee (1980).", "Canonized as a Saint (2016).", "White saree, blue border icon.", "Small things with great love.", "Worked for lepers and orphans.", "Voice for the voiceless.", "Died in 1997 in Kolkata.", "Legacy of selfless service."] },
            { name: "Bill Gates", img: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4000x2667+0+0/resize/1100/quality/50/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F82%2Ffb%2F62f7bcdd47329b5419411e9a7471%2Fbill-gates-portrait-at-npr.jpg", 
              bio: ["Co-founder of Microsoft.", "Software world revolutionary.", "Leading global philanthropist.", "Eradicating Polio via Foundation.", "Richest man for decades.", "Harvard dropout success story.", "Voracious reader of books.", "Pioneer of PC revolution.", "Visionary of future trends.", "Investor in green energy.", "Advocate for global health.", "Born in Seattle (1955).", "Believe in giving back wealth.", "Changed how offices work.", "Key figure in modern tech."] },
            { name: "Bhagat Singh", img: "https://bharatmatamandir.in/wp-content/uploads/2008/05/114-779x1024.jpg", 
              bio: ["Shaheed-e-Azam of India.", "Young revolutionary icon.", "Threw bomb in Central Assembly.", "Slogan: 'Inquilab Zindabad'.", "Hanged at the age of 23.", "Brilliant thinker and writer.", "Member of HSRA group.", "Sacrificed life for freedom.", "Symbol of fearlessness.", "Deeply read in socialism.", "Fasted 116 days in jail.", "Atheist and logic seeker.", "Death shook British Empire.", "Born in Punjab (1907).", "Eternal hero of youth."] },
            { name: "Thomas Edison", img: "https://i.ytimg.com/vi/hh5jAm9uE6o/maxresdefault.jpg", 
              bio: ["World's most prolific inventor.", "Invented the light bulb.", "Created the phonograph.", "Held 1093 US patents.", "Wizard of Menlo Park.", "Partially deaf since childhood.", "1% inspiration, 99% perspiration.", "First research lab founder.", "Pioneer of motion pictures.", "Failed 1000 times for bulb.", "Self-taught genius inventor.", "Lit up the entire world.", "Hard-working business leader.", "Died in 1931 as a legend.", "Father of modern innovation."] },
            { name: "Charlie Chaplin", img: "https://www.pbs.org/wnet/americanmasters/files/2020/04/563px-Charlie_Chaplin_I-e1644516173357-563x316.jpg", 
              bio: ["King of silent cinema.", "Created 'The Tramp' character.", "Actor, director, and composer.", "Master of slapstick comedy.", "Born in London (1889).", "Rose from extreme poverty.", "Global superstar of his era.", "Perfect timing in acting.", "Wrote/Directed his own films.", "Honorary Oscar winner (1972).", "Made world laugh in war times.", "Deeply humanistic stories.", "Icon of hat, cane, mustache.", "Died in 1977 in Switzerland.", "Changed history of movies."] },
            { name: "Nikola Tesla", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/250px-N.Tesla.JPG", 
              bio: ["Genius of AC electricity.", "Inventor of Tesla Coil.", "Man who predicted smartphones.", "Visualized machines in mind.", "Rival of Thomas Edison.", "Serbian-American engineer.", "Photographic memory master.", "Dreamed of free wireless power.", "Held 300+ global patents.", "Man ahead of his time.", "Obsessed with 3, 6, 9 numbers.", "Spoke 8 different languages.", "Died poor in hotel room.", "Icon for modern scientists.", "True father of energy tech."] },
            { name: "Leonardo da Vinci", img: "https://www.leonardodavinci.net/assets/img/leonardo-da-vinci.jpg", 
              bio: ["Ultimate Renaissance Man.", "Painter of 'Mona Lisa'.", "Scientist, Artist, Inventor.", "Designed flight 400 years early.", "Master of human anatomy.", "Born in Italy (1452).", "Left many works unfinished.", "Wrote in mirror writing.", "Curiosity personified human.", "Vegetarian animal lover.", "Studied water and bird flight.", "Universal genius figure.", "Sketched tanks and bridges.", "The Last Supper artist.", "Defined the modern mind."] },
            { name: "Martin Luther King Jr.", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg", 
              bio: ["Civil Rights leader (USA).", "Dreamer of racial equality.", "Nobel Peace Prize (1964).", "Inspired by Mahatma Gandhi.", "Voice of non-violent protest.", "Led the March on Washington.", "'I Have a Dream' speech.", "Fought against segregation.", "Baptist minister by profession.", "Global icon of justice.", "Youngest Nobel winner then.", "Assassinated in 1968.", "Holiday in USA on birthday.", "Believed in power of love.", "Changed American law history."] }
        ];

        const grid = document.getElementById('legend-grid');
        const modal = document.getElementById('bioModal');
        const modalBody = document.getElementById('modal-body');

        legends.forEach(person => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${person.img}" alt="${person.name}">
                <div class="card-title">${person.name}</div>
            `;
            card.onclick = () => {
                let bioHTML = `<h2>${person.name}</h2><ul class="bio-list">`;
                person.bio.forEach(line => bioHTML += `<li>${line}</li>`);
                bioHTML += `</ul>`;
                modalBody.innerHTML = bioHTML;
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            };
            grid.appendChild(card);
        });

        function closeModal() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }

        window.onclick = (e) => { if(e.target == modal) closeModal(); }

        let count = localStorage.getItem("likes") || 0;

function like(){
  count++;
  localStorage.setItem("likes", count);
  document.getElementById("likes").innerText = "Likes: " + count;
}
let comments = JSON.parse(localStorage.getItem("comments")) || [];

function addComment(){
  const name = document.getElementById("name").value;
  const msg = document.getElementById("msg").value;

  comments.push({name, msg});
  localStorage.setItem("comments", JSON.stringify(comments));

  showComments();
}

function showComments(){
  const div = document.getElementById("comments");
  div.innerHTML = "";
  comments.forEach(c=>{
    div.innerHTML += `<p><b>${c.name}</b>: ${c.msg}</p>`;
  });
}

showComments();