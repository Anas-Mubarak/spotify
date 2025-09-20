let subheadlist = ['Trending songs','Popular artists','Popular albums and singles','Popular radio','Featured Charts']
let scroll_container = document.querySelector('.scrollbar_container')
let key = -1
let subtext = {
    0:[ {
        "caption1": "Oorum Blood - From \"Dude\"",
        "caption2": "Pritam, A.R. Rahman"
        },
        {
        "caption1": "Arz Kiya Hai | Coke Studio Bharat",
        "caption2": "Sachin-Jigar"
        },
        {
        "caption1": "Deewaniyat (From \"Ek Deewane Ki Deewaniyat\") (Original Motion Picture Soundtrack)",
        "caption2": "Vishal Mishra, Kaushik-Guddu, Kunaal Vermaa"
        },
        {
        "caption1": "Sahiba",
        "caption2": "Yo Yo Honey Singh"
        },
        {
        "caption1": "Pal Pal Jeena Muhal (Lofi Slowed Reverb)",
        "caption2": "Shankar-Ehsaan-Loy, Shreya Ghoshal"
        },
        {
        "caption1": "Powerhouse x Disco",
        "caption2": "Jasleen Royal, Amit Trivedi, Sachet Tandon"
        },
        {
        "caption1": "Saiyaara - Old Version",
        "caption2": "Alka Yagnik"
        },
        {
        "caption1": "Panwadi (From \"Sunny Sanskari Ki Tulsi Kumari\")",
        "caption2": "Himesh Reshammiya, Anuv Jain"
        },
        {
        "caption1": "Vaa Vaa Pakkam Vaa - Remix",
        "caption2": "Shubh, Badshah, Sachet-Parampara"
        },
        {
        "caption1": "SHERIYA",
        "caption2": "A.R. Rahman"
        },
        {
        "caption1": "Bijuria (From \"Sunny Sanskari Ki Tulsi Kumari\")",
        "caption2": "Pritam, Arijit Singh, Sachin-Jigar"
        },
        {
        "caption1": "Trance of Omi (From \"They Call Him OG\")",
        "caption2": "Vishal-Shekhar"
        },
        {
        "caption1": "For A Reason",
        "caption2": "Atif Aslam, Anirudh Ravichander"
        },
        {
        "caption1": "Finding Her (Female Version)",
        "caption2": "Udit Narayan, Yo Yo Honey Singh, Shankar-Ehsaan-Loy"
        },
        {
        "caption1": "Jaane Na Tu",
        "caption2": "Shreya Ghoshal"
        },
        {
        "caption1": "Vibe Undi (From \"Mirai\") [Telugu]",
        "caption2": "Jasleen Royal, Amit Trivedi"
        },
        {
        "caption1": "Sapphire",
        "caption2": "Sachet Tandon, Alka Yagnik, Himesh Reshammiya"
        },
        {
        "caption1": "Thani Lokah Murakkaari (From \"Lokah - Chapter 1: Chandra\")",
        "caption2": "Anuv Jain"
        },
        {
        "caption1": "Ham Tere Pyar Mein",
        "caption2": "Shubh, Badshah"
        },
        {
        "caption1": "Apna Bana Le",
        "caption2": "Sachet-Parampara, Pritam"
        }],
    1:[ {
        "caption1": "Pritam",
        "caption2": "Artist"
        },
        {
        "caption1": "A.R. Rahman",
        "caption2": "Artist"
        },
        {
        "caption1": "Arijit Singh",
        "caption2": "Artist"
        },
        {
        "caption1": "Sachin-Jigar",
        "caption2": "Artist"
        },
        {
        "caption1": "Vishal-Shekhar",
        "caption2": "Artist"
        },
        {
        "caption1": "Atif Aslam",
        "caption2": "Artist"
        },
        {
        "caption1": "Anirudh Ravichander",
        "caption2": "Artist"
        },
        {
        "caption1": "Udit Narayan",
        "caption2": "Artist"
        },
        {
        "caption1": "Yo Yo Honey Singh",
        "caption2": "Artist"
        },
        {
        "caption1": "Shankar-Ehsaan-Loy",
        "caption2": "Artist"
        },
        {
        "caption1": "Shreya Ghoshal",
        "caption2": "Artist"
        },
        {
        "caption1": "Jasleen Royal",
        "caption2": "Artist"
        },
        {
        "caption1": "Amit Trivedi",
        "caption2": "Artist"
        },
        {
        "caption1": "Sachet Tandon",
        "caption2": "Artist"
        },
        {
        "caption1": "Alka Yagnik",
        "caption2": "Artist"
        },
        {
        "caption1": "Himesh Reshammiya",
        "caption2": "Artist"
        },
        {
        "caption1": "Anuv Jain",
        "caption2": "Artist"
        },
        {
        "caption1": "Shubh",
        "caption2": "Artist"
        },
        {
        "caption1": "Badshah",
        "caption2": "Artist"
        },
        {
        "caption1": "Sachet-Parampara",
        "caption2": "Artist"
        }],
    2:[
        {
        "caption1": "Aashiqui 2",
        "caption2": "Mithoon, Ankit Tiwari, Jeet Gannguli"
        },
        {
        "caption1": "Yeh Jawaani Hai Deewani",
        "caption2": "Pritam"
        },
        {
        "caption1": "Sanam Teri Kasam (Original Motion Picture Soundtrack)",
        "caption2": "Himesh Reshammiya, Sameer Anjaan, Subrat Sinha, Shabbir Ahmed"
        },
        {
        "caption1": "Finding Her",
        "caption2": "Kushagra, Bharath, "
        },
        {
        "caption1": "Young G.O.A.T",
        "caption2": "Yo Yo Honey Singh, Shankar-Ehsaan-Loy"
        },
        {
        "caption1": "Atif AslamRaanjhan (From \"Do Patti\")",
        "caption2": "Shreya Ghoshal, Jasleen Royal"
        },
        {
        "caption1": "Ultimate Love Songs - Arijit Singh",
        "caption2": "Amit Trivedi, Sachet Tandon"
        },
        {
        "caption1": "Making Memories",
        "caption2": "Alka Yagnik, Himesh Reshammiya"
        },
        {
        "caption1": "",
        "caption2": "Anuv Jain, Shubh"
        },
        {
        "caption1": "Sicario",
        "caption2": "Badshah, Sachet-Parampara"
        },
        {
        "caption1": "Glory",
        "caption2": "Pritam, A.R. Rahman"
        },
        {
        "caption1": "Best of Romance: Atif Aslam & Pritam",
        "caption2": "Arijit Singh, Sachin-Jigar"
        },
        {
        "caption1": "Jo Tum Mere Ho",
        "caption2": "Vishal-Shekhar, Atif Aslam"
        },
        {
        "caption1": "Jab We Met",
        "caption2": "Anirudh Ravichander, Udit Narayan"
        },
        {
        "caption1": "Tum Mile (Original Motion Picture Soundtrack)",
        "caption2": "Yo Yo Honey Singh, Shankar-Ehsaan-Loy"
        },
        {
        "caption1": "Hurry Up Tomorrow",
        "caption2": "Shreya Ghoshal, Jasleen Royal"
        },
        {
        "caption1": "Kabir Singh",
        "caption2": "Amit Trivedi, Sachet Tandon"
        },
        {
        "caption1": "Hamari Adhuri Kahani (Original Motion Picture Soundtrack)",
        "caption2": "Alka Yagnik, Himesh Reshammiya"
        },
        {
        "caption1": "WITHOUT PREJUDICE",
        "caption2": "Anuv Jain, Shubh"
        },
        {
        "caption1": "Mismatched: Season 3 (Soundtrack from the Netflix Series)",
        "caption2": "Badshah, Sachet-Parampara"
        }],
    3:[{
        "caption1": "Arijit Singh Radio",
        "caption2": "With Atif Aslam,&nbsp &nbsp Pritam, Shaarib Toshi and more"
        },
        {
        "caption1": "KK Radio",
        "caption2": "With Vishal-Shekhar, Atif Aslam"
        },
        {
        "caption1": "Shreya Ghoshal Radio",
        "caption2": "With Anirudh Ravichander, Udit Narayan, Yo Yo Honey Singh"
        },
        {
        "caption1": "Alka Yagnik Radio",
        "caption2": "With Shankar-Ehsaan-Loy"
        },
        {
        "caption1": "Diljit Dosanjh Radio",
        "caption2": "With Shreya Ghoshal, Jasleen Royal, Amit Trivedi, Sachet Tandon"
        },
        {
        "caption1": "A.R. Rahman Radio",
        "caption2": "With Alka Yagnik"
        },
        {
        "caption1": "Yo Yo Honey Singh Radio",
        "caption2": "With Himesh Reshammiya, Anuv Jain, Shubh"
        },
        {
        "caption1": "Sidhu Moose Wala Radio",
        "caption2": "With Badshah"
        },
        {
        "caption1": "Kishore Kumar Radio",
        "caption2": "With Sachet-Parampara, Pritam, A.R. Rahman"
        },
        {
        "caption1": "Kumar Sanu Radio",
        "caption2": "With Arijit Singh, Sachin-Jigar"
        },
        {
        "caption1": "Ilaiyaraaja Radio",
        "caption2": "with Vishal-Shekhar, Atif Aslam, Anirudh Ravichander"
        },
        {
        "caption1": "G. V. Prakash Radio",
        "caption2": "with Udit Narayan, Yo Yo Honey Singh"
        },
        {
        "caption1": "Karan Aujla Radio",
        "caption2": "with Shankar-Ehsaan-Loy, Shreya Ghoshal, Jasleen Royal"
        },
        {
        "caption1": "Lata Mangeshkar Radio",
        "caption2": "with Amit Trivedi"
        },
        {
        "caption1": "Shubh Radio",
        "caption2": "with Sachet Tandon, Alka Yagnik, Himesh Reshammiya"
        },
        {
        "caption1": "Udit Narayan Radio",
        "caption2": "with Anuv Jain"
        },
        {
        "caption1": "Masoom Sharma Radio",
        "caption2": "with Shubh, Badshah, Sachet-Parampara, Pritam"
        },
        {
        "caption1": "Mohammed Rafi Radio",
        "caption2": "with A.R. Rahman"
        },
        {
        "caption1": "Rahat Fateh Ali Khan Radio",
        "caption2": "with Arijit Singh, Sachin-Jigar, Vishal-Shekhar"
        },
        {
        "caption1": "S. P. Balasubrahmanyam Radio",
        "caption2": "with Atif Aslam, Anirudh Ravichander"
        }],
    4:[{
        "caption1": "Top Songs - Global",
        "caption2": "Your weekly update of &nbsp &nbsp the most played tracks right now - Global."
        },
        {
        "caption1": "Top Songs - India",
        "caption2": "Your weekly update of &nbsp &nbsp the most played tracks right now - India."
        },
        {
        "caption1": "Top 50 - Global",
        "caption2": "The ultimate global hits compilation - Top 50 worldwide."
        },
        {
        "caption1": "Top 50 - India",
        "caption2": "The ultimate Indian hits compilation - Top 50 nationwide."
        },
        {
        "caption1": "Viral 50 - Global",
        "caption2": "The tracks taking over the world right now - Viral 50 global."
        },
        {
        "caption1": "Viral 50 - India",
        "caption2": "The tracks taking over India right now - Viral 50 nationwide."
        }]
}

let fbclose = document.querySelector('.close_floatingbox')
let fb = document.querySelector('.floatingbox')
let placeholder = `<div style = "display:flex;align-items:center;justify-content:center; height:100%; background-color:rgb(40, 40, 40);" class = "placeholder"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline xBQRDMmxlfN1Il74AAyS" data-testid="album" viewBox="0 0 24 24" width="46" height="46"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12" fill="#B3B3B3"></path><path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0" fill="#B3B3B3"></path></svg></div>`

viewportkey()

for(let i=0;i<subheadlist.length;i++)
{
    let subhead = document.createElement('div')
    subhead.innerHTML = subheadlist[i] + `<div class="pconly showall">Show all</div>`
    subhead.classList.add('flb_line2','subhead','valign-center')
    scroll_container.appendChild(subhead)
    let scrollbar = document.createElement('div')
    scrollbar.classList.add('scrollbar')
    if(i<subheadlist.length)
    {
        for(let j=0;j<subtext[i].length;j++)
        {
            let scrollable = document.createElement('div')
            scrollable.classList.add('col-flex','scrollable')
            let scrollimage = document.createElement('div')
            scrollimage.classList.add('scrollable-img')

            if(subtext[i][j].caption1!=='')
            {
                console.log(i,j)
                scrollimage.setAttribute('style',`--bg_img : url(assets/images/mob/r${i+1}/c${j+1}.jpeg)`)
            }
            else
            {
                scrollimage.innerHTML = placeholder
            } 
            let scrolltext = document.createElement('div')
            scrolltext.classList.add('reg2text','scrollable-text')
            scrolltext.innerHTML = subtext[i][j].caption1
            scrollable.appendChild(scrollimage)
            let scrolltext2 = document.createElement('div')  
            scrolltext2.classList.add('reg2text','scrollable-text','scrollable-text2')
            scrolltext2.innerHTML = subtext[i][j].caption2

            if(key>1)
            {
                if(i==1)
                {
                    scrollimage.style.borderRadius = '50%'   
                }
                if(i<3)
                {
                    scrollable.appendChild(scrolltext)
                }
                else
                {
                    scrolltext2.style.marginTop =  4
                }
                scrollable.appendChild(scrolltext2)
            }
            else{
                scrollable.appendChild(scrolltext)
            }
            scrollbar.appendChild(scrollable)
        }
    }
    console.log(scrollbar)
    scroll_container.appendChild(scrollbar)
}

fbclose.addEventListener('click',()=>{
    fb.style.display = 'none'
})

function viewportkey(){
    if(window.matchMedia('(min-width: 2560px)').matches)
    {
        console.log('large pc')
        key = 3
    }
    else if(window.matchMedia('(min-width: 1024px)').matches)
    {
        console.log('small pc')
        key = 2
    }
}

window.addEventListener('resize',viewportkey)