import { createGlobalStyle } from "styled-components";
// import CSS from '../../Stylings/styles.scss';

export const GlobalStyle = createGlobalStyle`
:root{
    --primary: rgb(0, 168, 255);
    --primary-rgb: 0, 168, 255;
    --pad: 3rem;
    --body: ${({ theme }) => theme.body};
    --headerText: ${({ theme }) => theme.headerText};
    --shadow: ${({ theme }) => theme.shadow};
    --seperator: ${({ theme }) => theme.seperator};
    --secondary: ${({ theme }) => theme.secondary};
    --grad: ${({ theme }) => theme.grad};
    --text: ${({ theme }) => theme.text};
    --bg: ${({ theme }) => theme.bg};
    --black: 0,0,0;
    --white: 255,255,255;
}

* {
    padding: 0px;
    margin: 0px;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    transition: .5s all ease;
}
html, body{
    scroll-behavior: smooth;
}
body{
    background: var(--body);
}
a{
    text-decoration: none;
}
a, a:visited, a:hover, a:active {
  color: inherit;
}
#header {
    width: 100vw;
    display: grid;
    place-items: center;
}
input{
    outline: none;
    border: none;
    &:focus{
            border: solid 1px var(--primary);
            box-shadow: 0 0 0 4px rgba(var(--primary-rgb), .25);
            transition: .1s all ease;
        }
}
button {
    border: none;
    outline: none;
    cursor: pointer;
}
ul{
    list-style: none;
}
.flex-row-sb-center{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#header{
    box-shadow: 0 0 5px var(--shadow);
    position: relative;
    top: 0;
    left: 0;
    z-index: 10; 
    background: var(--body);
}
.header-inner {
    max-width: 1366px;
    width: 100%;
    padding: 1rem var(--pad);
    .header-logo {
        color: var(--primary);
        position: relative;
        z-index: 1;
        h1{
            font-weight: 550;
        }
    }
}
.logo-right {
    gap: 2rem;
    .btn-bg-none {
        background-color: transparent;
        color: var(--primary);
        font-size: 20px;
        display: flex;
        align-items: center;
        padding: 5px;
    }
    .language-switch {
        position: relative;
        user-select: none;
        cursor: pointer;
        &:hover{
            .lang-options{
                display: initial;
            }
        }
        .switch-wrapper{
            border: solid 1px var(--primary);
            border-radius: 5px;
            padding: 5px 10px;
            letter-spacing: 1.5px;
        }
        span{
            font-size: 13px;
        }
        .vertical-line {
            height: 20px;
            width: 1px;
            border-left: solid 1px var(--primary);
            margin: 0 5px 0 10px;
        }
        .lang-options{
            display: none;
            // margin-top: 3px;
            position: absolute;
            width: 100%;
            box-shadow: 0px 0px 5px var(--shadow);
            background: var(--body);
            border-radius: 5px;
            ul{
                height: 100%;
            }
            li{
                color: var(--headerText);
                padding: .5rem;
                border-bottom: solid 1px var(--seperator);
                font-size: 13px;
            }
        }
    }
}
.header-links{
    margin-top: 2rem;
    .nav-links{
        display: flex;
        flex-direction: row;
        gap: 2rem;
            li{
                position: relative;
                font-size: 13px;
                font-weight: 600;
                color: var(--headerText);
                letter-spacing: 1.5px;
                cursor: pointer;
                &::before{
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0%;
                    font-size: 13px;
                    font-weight: 600;
                    height: 100%;
                    color: var(--primary);
                    overflow: hidden;
                    transition: .2s all ease;
                }
                &:hover::before{
                    width: 100%;
                }
            }
    }
}
.search-wrapper{
    position: relative;
    input{
        border: none;
        background-color: var(--seperator);
        height: 40px;
        border-radius: 5px;
        width: 300px;
        padding: .5rem .5rem .5rem 2.3rem;
        color: var(--headerText);
        transition: .1s all ease;
        &:focus{
            border: solid 1px var(--primary);
            box-shadow: 0 0 0 4px rgba(var(--primary-rgb), .25);
            transition: .1s all ease;
        }
        &:focus+i{
            font-weight: bolder;
            color: var(--primary);
        }
    }
    i{
        position: absolute;
        font-weight: bolder;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--headerText);
    }
}
.mb-only{
    display: none !important;
}
.left-full{
    left: calc(-100% - 1rem) !important;
    position: relative;
}
#content{
    width: 100vw;
    background: var(--secondary);
    .section-head, .no-results, .pagintion-header{
        max-width: 1366px;
        width: 100%;

        margin: 0 auto;
        padding: var(--pad);
        font-size: calc(var(--pad) - 1rem);
        color: rgba(var(--text), .8);
    }.section-head{
        h1{
            text-transform: capitalize;
        }
    }
    .no-results{
        height: 70vh;
        display: grid;
        place-items: center;
        .no-results-wrapper{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            width: 450px;
            text-align: center;
            h1{
                font-size: 2rem;
            }
        }
    }
    .card-wrapper{
        width: 1366px;
        /* height: 900px; */
        margin: 0 auto;
        padding: 0 var(--pad);
        display: grid;
        grid-template-columns: 380px 380px 380px;
        justify-content: space-between;
    }
}
.card {
    width: 380px;
    height: 425px;
    margin-bottom: 70px;
    overflow: hidden;
    box-shadow: 0 7px 13px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
    .card-thumbnail {
        width: 100%;
        height: 230px;
        background-color: var(body);
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        .no-preview{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: var(--grad);
            display: grid;
            place-items: center;
            text-align: center;
            >h1{
                height: 100%;
                display: grid;
                place-items: center;
                color: rgb(var(--text));
            }
        }
    }
    .card-content {
        padding: 1rem;
        height: 195px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--body);
        .content-top {
            h4 {
                color: rgba(var(--text), 0.75);
                margin-top: 10px;
            }
            span {
                color: var(--primary);
                font-size: 15px;
                font-weight: 500;
            }
        }
        p{
            color: rgba(var(--text), 0.5);
            letter-spacing: 1px;
            font-size: 12px;
        }
    }
    &:hover{
        box-shadow: none;
        transform: scale(1.08);
        border: solid 2px var(--primary);
    }
}
#section-wrapper{
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(var(--bg), 0.8);
    overflow: hidden;
    .loader{
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        .spinner{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: solid 3px rgba(var(--text), .2);
            border-top: solid 4px var(--primary);
            border-left: solid 4px var(--primary);
            animation: spinner 1s linear infinite;
        }
    }
}
.svg-container{
    width: 500px;
    height: 300px;
    svg{
        width: 100%;
        height: 100%;
    }
}
.pagintion-header{
    display: flex;
    justify-content: flex-end;
}
.pagination{
    display: flex;
    flex-direction: column;
    width: 250px;
    gap: 1rem;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.page-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .page-nav{
        display: grid;
        place-items: center;
        color: #fff;
        border: none;
        outline: none;
        padding: .4rem;
        background: var(--primary);
        border-radius: 5px;
        font-size: 1rem;
    }
    input{
        color: rgba(var(--text), .8);
        border-radius: 5px;
        padding: .5rem;
        font-size: .7rem;
        width: 170px;
        height: 35px;
        text-align: center;
        background: var(--seperator)
    }
}
.page-bottom{
    width: 100%;
    text-align: center;
    font-size: .9rem;
    color: rgba(var(--text), 0.6);
}
.detailed-view-wrapper{
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    // background: grey;
    padding: 3rem;
    display: flex;
    gap: var(--pad);
}
.left-view{
    width: 70%;
    overflow: hidden;
}
.right-view{
    width: 30%;
    h1{
        font-size: 2rem;
        color: rgba(var(--text), .8);
    }
    .feed-list{
        height: 500px;
        overflow: auto;
        padding: 1rem 0;
        li{
            line-height: 2;
            text-align: justify;
            color: rgba(var(--text), .7);
            padding: .5rem 0;
            font-size: .8rem;
            border-bottom: solid 1px rgba(var(--text), .1);
            cursor: pointer;    
            &:last-child{
                border-bottom: none;
            }
            &:hover{
                color: var(--primary);
                font-weight: 450;
            }
        }
    }

}
.btn-with-icon{
    display: flex;
    align-items: center;
    gap: .3rem;
    border-radius: 5px;
    color: var(--primary);
    border: none;
    text-transform: capitalize;
    font-size: 1.2rem;
    background-color: transparent;
    &:hover{
        background-color: rgba(0,0,0,.01);
    }
}
.heading-section{
    margin: 2rem 0;
    h1{
        font-size: 2rem;
    }
    .news-title{
        margin-bottom: 2rem;
        color: rgba(var(--text), 0.8);
    }
    .head-desc{
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            color: rgba(var(--text), .6);
        }
        span{
            color: var(--primary);
        }
    }
}
.thumb-wrapper{
    overflow: hidden;
    border-radius: 5px;
    width: 100%;
    height: 500px;
    margin-bottom: 2rem;
    .thumbnail-lg{
        width: 100%;
        height: 100%;
        &:hover{
            transform: scale(1.05);
        }
    }
}
.news-desc{
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;
    color: rgba(var(--text), .7);
    font-size: 1rem;
    p{
        color: var(--primary);
        padding: 1rem;
        background: rgba(var(--primary-rgb), 0.1);
        border-radius: 5px;
    }
}
.footer-wrapper{
    padding: 4rem;
    display: flex;
    flex-direction: column; 
    gap: 2rem;
    align-items: center;
    background: var(--body);
    .footer-links{
        display: flex;
        gap: 2rem;
        align-items: center;
        a{
            font-size: 1.5rem;
            color: rgba(var(--text), 0.6);
            transition: .1s all ease;
            margin-top: 5px;
            &:hover{
            transition: .1s all ease;
                color: var(--primary);
            }
        }
        .link-seperator{
            height: 18px;
            width: 1px;
            border-left: solid 1px rgba(var(--text), 0.5);
            transform: rotate(20deg); 
            /* display: none; */
        }
    }
    p{
        color: rgba(var(--text), .7);
        font-size: 0.9rem;
        span{
            color: var(--primary);
        }
    }
}

/* Animations */
@keyframes spinner{
    50%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

/* Only Desktop */
@media screen and (min-width: 1025px){
    .logo-right .search-wrapper{
        display: none
    }
}
@media screen and (min-width: 1025px) and (max-width: 1366px){
    #content{
        .card-wrapper{
            width: 100vw;
            grid-template-columns: 30% 30% 30%;
            .card{
                width: unset;
            }
        }
    } 
}
/* Only tablet */
@media screen and (max-width: 1024px) and (min-width: 641px){
    :root{
        --pad: 2rem;
    }
    .header-links{
        .search-wrapper{
            display: none;
        }
    }
    .header-inner{
        width: 100vw;
        padding: 1rem var(--pad);
        .header-logo{
            .logo-right{
                gap: 1.5rem;
                .search-wrapper>input{
                    width: 200px;
                }
            }
        }
    }
    ul.nav-links{
        overflow-x: auto;
    }
    #content{ 
        display: grid;
        place-items: center;
        .section-head, .no-results, .pagintion-header{
            width: 100vw;
        }
        .card-wrapper{
            width: 100vw;
            display: grid;
            grid-template-columns: 45% 45%;
            justify-content: space-between;
            .card{
                width: 100%;

            }
        }
        h1{
            font-size: 1.5rem;
        }
        .no-preview{
            display: grid;
            place-items: center;
            h1{
                margin: 0 auto;
                width: 80%;
            }
        }
    }
    .detailed-view-wrapper{
        width: 100vw;
        padding: var(--pad);
        flex-direction: column;
        .left-view, .right-view{
            width: 100%;
        }
        .thumb-wrapper{
            height: 450px;
        }
        h1{
            color: rgba(var(--text), .8);
            font-size: 1.5rem;
        }
    }
    .thumb-wrapper{
        width: 100%;
    }
}
/* Only Mobile */
@media screen and (max-width: 640px) {
    :root{
        --pad: 1.5rem;
    }
    div .mb-only {
        display: flex !important;
    }
    #header{
        /* overflow: hidden; */
    }
    .header-inner {
        padding: var(--pad);
        position: relative;
        width: 100vw;
    }
    .header-links {
        z-index: 2;
        padding: var(--pad);
        margin: 1rem 0 0 -1rem;
        position: absolute;
        left: calc(0% + 1rem);
        box-shadow: 0 2.5px 5px var(--shadow);
        background: var(--body);
        width: 100vw;
        flex-direction: column;
        align-items: flex-start;
        .nav-links {
            display: flex;
            flex-direction: column;
        }
    }
    .search-wrapper {
        display: none;
    }
    .language-switch {
        display: none;
    }
    .logo-right{
        gap: 1rem;
        position: relative;
    }
    .mb-only .search-wrapper{
        display: unset;
    }

    .mobile-search-wrapper{
            position: absolute;
            top: -100%;
            left: 0;
            width: 100vw;
            background: var(--body);
            padding: var(--pad);
            z-index: 2;
            input[type='search']{
                width: 290px;   
                height: unset;
                padding: .5rem 2.3rem;
            }
            .btn-bg-none{
                background: none;
                font-size: 1.5rem;
                color: var(--headerText);
            }
        }
    #content{ 

        display: grid;
        place-items: center;
        .section-head,  .no-results, .pagintion-header{
            width: 100vw;
            padding: 2rem var(--pad);
        }
        .pagintion-header{
            justify-content: center;
        }
        .card-wrapper{
            width: 100vw;
            display: grid;
            grid-template-columns: 100%;
            justify-content: space-between;
            .card{
                width: 100%;
                    margin-bottom: 2rem;
                &:hover{
                    transform: unset;
                }
            }

        }
        h1{
            color: rgba(var(--text), .8);
            font-size: 1.5rem;
        }
        .no-preview{
            display: grid;
            place-items: center;
            h1{
                margin: 0 auto;
                width: 80%;
            }
        }
    }
    #content .no-results{
    .no-results-wrapper{
        width: unset !important;
        gap: unset;
        h1{
            font-size: 1.5rem;
        }
    }
    }
    .svg-container{
        width: 300px;
    }
    .detailed-view-wrapper{
        width: 100vw;
        padding: var(--pad);
        flex-direction: column;
        .left-view, .right-view{
            width: 100%;
        }
        h1{
            font-size: 1.5rem;
        }
        .thumb-wrapper{
            height: 200px;
        }
    }
    .heading-section .head-desc{
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .mb-lang{
        width: 100%;
        padding: var(--pad);
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        gap: var(--pad);
        ul{
            width: 100%;
            border-radius: 5px;
            overflow: hidden;
            li{
                width: 100%;
                text-align: center;
                color: rgba(var(--text), 0.8);
                cursor: pointer;
                padding: var(--pad);
                background: var(--secondary);
                border-bottom: solid 1px var(--seperator);
                &:hover{
                    background: var(--body);
                    color: var(--primary);
                }
                &:last-child{
                    border-bottom: none;
                }
            }
        }
        button{
            padding: var(--pad);
            background: var(--primary);
            color: rgba(var(--white), 1);
            font-size: 1rem;
            border-radius: 5px;
        }
    }
    .d-flex{
        display: flex;
    }
    .d-none{
        display: none !important;
    }
    .footer-wrapper{
        padding: 4rem var(--pad);
        gap: 3rem;
        p{
            text-align: center;
        }
    }
}`;
