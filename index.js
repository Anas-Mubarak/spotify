let subheadlist = ['Trending songs','Popular artists','Popular albums and singles','Popular radio','Featured Charts']
let scroll_container = document.querySelector('.scrollbar_container')
let subtext = {
    0:[ 'Oorum Blood - From "Dude"','Arz Kiya Hai | Coke Studio Bharat','Deewaniyat (From "Ek Deewane Ki Deewaniyat") (Original Motion Picture Soundtrack)','Sahiba','Pal Pal Jeena Muhal (Lofi Slowed Reverb)',
        'Powerhouse x Disco','Saiyaara - Old Version','Panwadi (From "Sunny Sanskari Ki Tulsi Kumari")','Vaa Vaa Pakkam Vaa - Remix','SHERIYA',   
        'Bijuria (From "Sunny Sanskari Ki Tulsi Kumari")','Trance of Omi (From "They Call Him OG")','For A Reason','Finding Her (Female Version)','Jaane Na Tu',
        'Vibe Undi (From "Mirai") [Telugu]','Sapphire','Thani Lokah Murakkaari (From "Lokah - Chapter 1: Chandra")','Ham Tere Pyar Mein','Apna Bana Le'],
    1:[ 'Pritam','A.R. Rahman','Arijit Singh','Sachin-Jigar','Vishal-Shekhar',
        'Atif Aslam','Anirudh Ravichander','Udit Narayan','Yo Yo Honey Singh','Shankar-Ehsaan-Loy',   
        'Shreya Ghoshal','Jasleen Royal','Amit Trivedi','Sachet Tandon','Alka Yagnik',
        'Himesh Reshammiya','Anuv Jain','Shubh','Badshah','Sachet-Parampara'],
    2:[ 'Aashiqui 2','Yeh Jawaani Hai Deewani','Sanam Teri Kasam (Original Motion Picture Soundtrack)','Finding Her','Young G.O.A.T',
        'Atif AslamRaanjhan (From "Do Patti")','Ultimate Love Songs - Arijit Singh','Making Memories','','Sicario',   
        'Glory','Best of Romance: Atif Aslam & Pritam','Jo Tum Mere Ho','Jab We Met','Tum Mile (Original Motion Picture Soundtrack)',
        'Hurry Up Tomorrow','Kabir Singh','Hamari Adhuri Kahani (Original Motion Picture Soundtrack)','WITHOUT PREJUDICE','Mismatched: Season 3 (Soundtrack from the Netflix Series)'],
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

for(let i=0;i<subheadlist.length;i++)
{
    let subhead = document.createElement('div')
    subhead.innerText = subheadlist[i]
    subhead.classList.add('flb_line2','subhead')
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
            scrolltext.innerText = subtext[i][j]
            scrollable.appendChild(scrolltext)
            scrollbar.appendChild(scrollable)
        }
    }
    console.log(scrollbar)
    scroll_container.appendChild(scrollbar)
}

fbclose.addEventListener('click',()=>{
    fb.style.display = 'none'
})