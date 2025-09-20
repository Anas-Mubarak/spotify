let subheadlist = ['Trending songs','Popular artists','Popular albums and singles','Popular radio','Featured Charts']
let scroll_container = document.querySelector('.scrollbar_container')
let key = -1
let subtext 
let fbclose = document.querySelector('.close_floatingbox')
let fb = document.querySelector('.floatingbox')
let placeholder = `<div style = "display:flex;align-items:center;justify-content:center; height:100%; background-color:rgb(40, 40, 40);" class = "placeholder"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline xBQRDMmxlfN1Il74AAyS" data-testid="album" viewBox="0 0 24 24" width="46" height="46"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12" fill="#B3B3B3"></path><path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0" fill="#B3B3B3"></path></svg></div>`

viewportkey()

async function dataloader() {
    try {
        const response = await fetch('spotifydata.json')
        subtext = await response.json()
        mainevent()
    } catch (error) {
        console.log('error',error)
    }
}

dataloader()

function mainevent()
{
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
}

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