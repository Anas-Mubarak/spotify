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
        "Aashiqui 2",
        "Yeh Jawaani Hai Deewani",
        "Sanam Teri Kasam (Original Motion Picture Soundtrack)",
        "Finding Her",
        "Young G.O.A.T",
        "Atif AslamRaanjhan (From \"Do Patti\")",
        "Ultimate Love Songs - Arijit Singh",
        "Making Memories",
        "",
        "Sicario",
        "Glory",
        "Best of Romance: Atif Aslam & Pritam",
        "Jo Tum Mere Ho",
        "Jab We Met",
        "Tum Mile (Original Motion Picture Soundtrack)",
        "Hurry Up Tomorrow",
        "Kabir Singh",
        "Hamari Adhuri Kahani (Original Motion Picture Soundtrack)",
        "WITHOUT PREJUDICE",
        "Mismatched: Season 3 (Soundtrack from the Netflix Series)"
    ],
    3:['Arijit Singh Radio','KK Radio','Shreya Ghoshal Radio','Alka Yagnik Radio','Diljit Dosanjh Radio',
        'A.R. Rahman Radio','Yo Yo Honey Singh Radio','Sidhu Moose Wala Radio','Kishore Kumar Radio','Kumar Sanu Radio',   
        'Ilaiyaraaja Radio','G. V. Prakash Radio','Karan Aujla Radio','Lata Mangeshkar Radio','Shubh Radio',
        'Udit Narayan Radio','Masoom Sharma Radio','Mohammed Rafi Radio','Rahat Fateh Ali Khan Radio','S. P. Balasubrahmanyam Radio'],
    4:[ 'Top Songs - Global','Top Songs - India','Top 50 - Global','Top 50 - India','Viral 50 - Global',
        'Viral 50 - India']
}

let fbclose = document.querySelector('.close_floatingbox')
let fb = document.querySelector('.floatingbox')
let placeholder = `<div style = "display:flex;align-items:center;justify-content:center; height:100%; background-color:rgb(40, 40, 40)"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline xBQRDMmxlfN1Il74AAyS" data-testid="album" viewBox="0 0 24 24" width="46" height="46"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12" fill="#B3B3B3"></path><path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0" fill="#B3B3B3"></path></svg></div>`

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
            if(subtext[i][j]!=='')
            {
                console.log(i,j)
                scrollimage.setAttribute('style',`--bg_img : url(assets/images/mob/r${i+1}/c${j+1}.jpeg)`)
            }
            else
            {
                scrollimage.innerHTML = placeholder
            }
            scrollable.appendChild(scrollimage)
            let scrolltext = document.createElement('div')
            scrolltext.classList.add('reg2text','scrollable-text')
            scrolltext.innerText = subtext[i][j].caption1
            scrollable.appendChild(scrolltext)
            if(key>1)
            {
                console.log('hi')
                let scrolltext2 = document.createElement('div')  
                scrolltext2.classList.add('reg2text','scrollable-text','scrollable-text2')
                scrolltext2.innerText = subtext[i][j].caption2
                scrollable.appendChild(scrolltext2)
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
        console.log('small pc')
        key = 3
    }
    else if(window.matchMedia('(min-width: 1024px)').matches)
    {
        console.log('small pc')
        key = 2
    }
}

window.addEventListener('resize',viewportkey)