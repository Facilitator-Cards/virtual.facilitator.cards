import React, { Component } from "react";
import { Link } from "gatsby";

class Footer extends Component {
  render() {  
    return (
      <footer id="footer">
        <section className="border-t-4 border-dotted border-gray-200 pt-8 pb-4">
          <div className="wrap flex flex-wrap justify-center items-center">
            <a className="btn text-lg btn-cta mr-4 mb-4" href="https://airtable.com/shrLdKbYqRPR6ssaL" target="_blank" rel="noopener noreferrer">🎁&nbsp;&nbsp;Submit Activity</a>
            <a className="btn text-lg mr-4 mb-4" href="https://airtable.com/shrseBJBvstTx2kbX" target="_blank" rel="noopener noreferrer">🐞&nbsp;&nbsp;Report Bug</a>
            <a className="btn text-lg mr-4 mb-4" href="https://airtable.com/shrkpcTZ2fd6wkLPV" target="_blank" rel="noopener noreferrer">🌱&nbsp;&nbsp; Suggest Improvement</a>
          </div>
        </section>
        <section id="by" className="relative py-12 lg:py-20 bg-gray-200 text-gray-900">
          <div class="wrap">
            <h3 className="theme-font leading-none text-2xl md:text-3xl lg:text-4xl font-black mb-2">
              Facilitator Cards were created
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl theme-font">
              by the same two humans behind <a className="text-black underline" target="_blank" rel="noopener noreferrer" href="http://www.facilitating.xyz" title="FacilitatingXYZ">Facilitating.XYZ</a> (a free online resource for all facilitators), <a className="text-black underline" target="_blank" rel="noopener noreferrer" href="http://www.facilitationmagic.com">Unlocking the Magic of Facilitation</a> (book about key facilitator concepts), &amp; <a className="text-black underline" target="_blank" rel="noopener noreferrer" href="https://www.thesafezoneproject.com" title="The Safe Zone Project">The Safe Zone Project</a> (free curriculum &amp; train-the-trainer retreat guide).
            </p>
          </div>
        </section>
        <section id="uncopyright" className="py-12 lg:py-20 bg-gray-900">
          <div className="wrap lg:flex">
            <div className="theme-font">
              <h3 className="theme-font leading-none text-2xl md:text-3xl lg:text-4xl font-black mb-2">
                &amp; offered in the Gift
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl theme-font">
                like everything else we make. The ideas, processing tools<strong className="text-red-500">*</strong>, and resources we've created &amp; shared on this site are&nbsp;
                <a className="text-black underline" target="_blank" rel="noopener noreferrer" rel="license" href="https://uncopyright.org/notice/?uwn=www.facilitator.cards&?uwc=Sam+Killermann+%26+Meg+Bolger" title="View Uncopyright Notice">uncopyrighted</a> &amp;&nbsp;
                <a className="text-black underline" target="_blank" rel="noopener noreferrer" href="https://github.com/killermann/virtual.facilitator.cards" title="View Source Code">open-source</a>. We release any rights we have, and you're empowered to share, modify, reprint, and improve &mdash; no permission needed, it's yours, our <a href="https://en.wikipedia.org/wiki/Gift_economy" title="Wikipedia Article about Gift Economy" target="_blank" rel="noopener noreferrer">gift</a> to you.
              </p>
            </div>
            <div id="card-license" className="flex mt-8 lg:ml-12 justify-center items-center">
              <p className="md:text-lg theme-font">
                <strong className="text-red-500">*</strong>Most of processes on the cards are ways facilitators have been engaging with groups for decades, learning from one another &amp; improving collectively, so they're hard to pin down to one "creator." We'll denote when a process has IP restrictions, and work to honor lineages of ideas. Want to help? Email <a className="text-black underline" target="_blank" rel="noopener noreferrer" href="mailto:hello@facilitator.cards">hello@facilitator.cards</a> with your story of a particular process. 
              </p>
            </div>
          </div>   
        </section>
        <section id="footer-menu">
          <div className="wrap pt-12 flex flex-wrap justify-between text-lg">
            <ul className="theme-font pb-12">
              <li>
                <a className="teal" href="https://www.facilitator.cards/shop/">Buy Your Deck Now</a>
              </li>
              <li>
                <a href="https://facilitatorcards.ck.page/4c87ee0944" title="Subscribe for Emails">Subscribe for Emails</a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1ZTLGwvC-b0uzJdx01maE2rAidJV7GvVc?usp=sharing" title="Download Press Kit">Download Press Kit</a>
              </li>
              <li>
                <a href="https://www.facilitator.cards/faq" title="FAQ">Frequently Asked Questions</a>
              </li>
            </ul>
            <ul className="theme-font pb-12">
              <li>
                <a href="https://www.facilitator.cards/story" title="Our Story">Our Story</a>
              </li>
              <li>
                <a href="https://www.facilitator.cards/cards" title="About the Cards">The Cards</a>
              </li>
              <li>
                <a href="https://www.facilitator.cards/how" title="How to Use Them">How to Use Them</a>
              </li>
              <li>
                <a href="https://www.facilitator.cards/blog" title="Blog">Read the Blog</a>
              </li>
            </ul>
            <ul className="theme-font pb-12">
              <li>
                <a href="https://www.facilitator.cards/contact" title="Our Story">Contact Us</a>
              </li>
              <li>
                <a href="https://www.facilitator.cards/terms" title="Terms">Terms</a>
              </li>
              <li>
                <a href="https://www.facilitator.cards/privacy" title="Privacy">Privacy</a>
              </li>
            </ul>
          </div>
        </section>
        <section id="benefit-corporation">
          <div className="wrap pb-12 lg:pb-20 flex justify-start items-center">
              <svg className="w-12 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 360"><path d="M74.77,114.77h31.64c7.7,0,17.85,0,23.1,3.18a20.71,20.71,0,0,1,10.26,18.21c0,9.28-4.88,16.24-13,19.54V156c10.76,2.19,16.62,10.26,16.62,21,0,12.83-9.17,25-26.52,25H74.77Zm11.6,37.51H109.6c13.19,0,18.57-4.76,18.57-13.93,0-12.09-8.55-13.8-18.57-13.8H86.37Zm0,39.95h29.09c10,0,16.37-6.11,16.37-15.63,0-11.37-9.16-14.54-18.94-14.54H86.37Z" fill="#fff"/><path d="M173.11,158.43a66.36,66.36,0,1,1-66.36-66.35A66.34,66.34,0,0,1,173.11,158.43ZM106.75,82a76.43,76.43,0,1,0,76.44,76.43A76.43,76.43,0,0,0,106.75,82Z" fill="#fff"/><rect x="30.33" y="250.94" width="152.55" height="10.03" fill="#fff"/><path d="M178.1,239.9l.54,0a1.09,1.09,0,0,0,.44-.1.72.72,0,0,0,.31-.26.88.88,0,0,0,.11-.5.73.73,0,0,0-.1-.42.62.62,0,0,0-.27-.24,1.07,1.07,0,0,0-.38-.13l-.42,0h-1.09v1.69Zm.37-2.36a2.15,2.15,0,0,1,1.4.37,1.41,1.41,0,0,1,.47,1.15,1.36,1.36,0,0,1-.4,1.06,1.89,1.89,0,0,1-1,.39l1.52,2.35h-.88l-1.46-2.3h-.87v2.3h-.84v-5.32Zm-3.75,4.18a3.49,3.49,0,0,0,.78,1.25,3.61,3.61,0,0,0,1.2.82,3.65,3.65,0,0,0,1.48.29,3.59,3.59,0,0,0,1.48-.29,3.64,3.64,0,0,0,2-2.07,4.18,4.18,0,0,0,0-3.06,3.82,3.82,0,0,0-.79-1.23,3.92,3.92,0,0,0-1.19-.81,3.76,3.76,0,0,0-1.48-.3,3.84,3.84,0,0,0-1.48.3,3.74,3.74,0,0,0-1.2.81,3.49,3.49,0,0,0-.78,1.23,4.18,4.18,0,0,0,0,3.06m-.76-3.34a4.94,4.94,0,0,1,1-1.43,4.71,4.71,0,0,1,1.47-.95,4.38,4.38,0,0,1,1.76-.34A4.49,4.49,0,0,1,180,236a4.64,4.64,0,0,1,1.43.95,4.76,4.76,0,0,1,1,1.43,4.37,4.37,0,0,1,.36,1.81,4.26,4.26,0,0,1-.36,1.8,4.65,4.65,0,0,1-1,1.46,4.5,4.5,0,0,1-1.43,1,4.86,4.86,0,0,1-1.79.33,4.74,4.74,0,0,1-1.76-.33,4.56,4.56,0,0,1-1.47-1,4.83,4.83,0,0,1-1-1.46,4.25,4.25,0,0,1-.35-1.8,4.36,4.36,0,0,1,.35-1.81" fill="#fff"/><path d="M39.86,318.11a11.34,11.34,0,0,0,1.77-.13,4.41,4.41,0,0,0,1.51-.51,2.82,2.82,0,0,0,1-1.07,3.72,3.72,0,0,0,.39-1.82,3.65,3.65,0,0,0-.39-1.81,2.84,2.84,0,0,0-1-1.08,4.41,4.41,0,0,0-1.51-.51,11.34,11.34,0,0,0-1.77-.13H35.69v7.06ZM41.33,307a10.45,10.45,0,0,1,3.89.65,7.34,7.34,0,0,1,2.62,1.7,6.45,6.45,0,0,1,1.47,2.41,8.72,8.72,0,0,1,0,5.59,6.61,6.61,0,0,1-1.47,2.43,7.48,7.48,0,0,1-2.62,1.7,10.46,10.46,0,0,1-3.89.64H35.69v8.45H30.33V307Z" fill="#da2c2b"/><polygon points="71.36 307.02 71.36 311.38 58.48 311.38 58.48 316.43 70.3 316.43 70.3 320.46 58.48 320.46 58.48 326.23 71.63 326.23 71.63 330.59 53.11 330.59 53.11 307.02 71.36 307.02" fill="#da2c2b"/><polygon points="80.58 307.02 90.76 322.83 90.83 322.83 90.83 307.02 95.86 307.02 95.86 330.59 90.49 330.59 80.34 314.81 80.28 314.81 80.28 330.59 75.25 330.59 75.25 307.02 80.58 307.02" fill="#da2c2b"/><path d="M110.72,326.23a7.16,7.16,0,0,0,2.25-.36,5,5,0,0,0,2-1.2,6,6,0,0,0,1.37-2.2,9.38,9.38,0,0,0,.51-3.3,13.27,13.27,0,0,0-.36-3.22,6.33,6.33,0,0,0-1.18-2.46,5.26,5.26,0,0,0-2.17-1.57,9,9,0,0,0-3.33-.54h-3.83v14.85Zm.37-19.21a13,13,0,0,1,4.39.73,9.46,9.46,0,0,1,3.52,2.18,10.09,10.09,0,0,1,2.33,3.63,14.41,14.41,0,0,1,.83,5.11,15.69,15.69,0,0,1-.68,4.76,10.26,10.26,0,0,1-2.07,3.76,9.51,9.51,0,0,1-3.45,2.49,12,12,0,0,1-4.87.91H100.57V307Z" fill="#da2c2b"/><rect x="125.89" y="307.02" width="5.36" height="23.57" fill="#da2c2b"/><polygon points="141.3 307.02 151.48 322.83 151.55 322.83 151.55 307.02 156.57 307.02 156.57 330.59 151.21 330.59 141.06 314.81 140.99 314.81 140.99 330.59 135.97 330.59 135.97 307.02 141.3 307.02" fill="#da2c2b"/><path d="M175.74,330.41a9.37,9.37,0,0,1-3.52.71,12.83,12.83,0,0,1-5-.94,10.92,10.92,0,0,1-3.78-2.59,11.4,11.4,0,0,1-2.35-3.88,13.75,13.75,0,0,1-.82-4.8,14.25,14.25,0,0,1,.82-4.91,11.67,11.67,0,0,1,2.35-3.94,10.91,10.91,0,0,1,3.78-2.64,12.65,12.65,0,0,1,5-1,12.07,12.07,0,0,1,3.64.55,10.18,10.18,0,0,1,3.17,1.6,8.56,8.56,0,0,1,3.47,6.17h-5.12a5,5,0,0,0-1.85-3,5.48,5.48,0,0,0-3.31-1,6.46,6.46,0,0,0-3.08.67,5.9,5.9,0,0,0-2,1.82A7.89,7.89,0,0,0,166,315.9a12.47,12.47,0,0,0-.36,3,11.48,11.48,0,0,0,.36,2.88,7.76,7.76,0,0,0,1.14,2.53,5.85,5.85,0,0,0,2,1.8,6.46,6.46,0,0,0,3.08.67,6,6,0,0,0,4.12-1.3,5.62,5.62,0,0,0,1.69-3.78h-5.4v-3.86h10.25v12.74h-3.42l-.55-2.67a7.89,7.89,0,0,1-3.17,2.49" fill="#da2c2b"/><path d="M49.26,48.36a6.17,6.17,0,0,0-3.18-2.54,6.37,6.37,0,0,0-2.14-.36,7.15,7.15,0,0,0-3.47.78,6.72,6.72,0,0,0-2.31,2.12,9.37,9.37,0,0,0-1.29,3,15,15,0,0,0-.4,3.5,14,14,0,0,0,.4,3.37,9.23,9.23,0,0,0,1.29,3,6.64,6.64,0,0,0,2.31,2.09,7,7,0,0,0,3.47.79,5.58,5.58,0,0,0,4.33-1.69,7.84,7.84,0,0,0,1.91-4.47H56a13.89,13.89,0,0,1-1.19,4.66,10.82,10.82,0,0,1-6.24,5.78,13.6,13.6,0,0,1-4.66.77A14.14,14.14,0,0,1,38.26,68,12.13,12.13,0,0,1,34,65a13.23,13.23,0,0,1-2.66-4.53,16.49,16.49,0,0,1-.93-5.6,17.11,17.11,0,0,1,.93-5.72A13.55,13.55,0,0,1,34,44.57a12,12,0,0,1,4.25-3.08,13.81,13.81,0,0,1,5.68-1.12,13.67,13.67,0,0,1,4.29.66,11.48,11.48,0,0,1,3.62,1.9A10.29,10.29,0,0,1,54.49,46a11,11,0,0,1,1.31,4.24H50A5.1,5.1,0,0,0,49.26,48.36Z" fill="#fff"/><path d="M64.66,63.75a5.6,5.6,0,0,0,6.39.36,3.38,3.38,0,0,0,1.46-1.75h4.82a9.07,9.07,0,0,1-3.55,5.12A10.38,10.38,0,0,1,68,69a11.4,11.4,0,0,1-4.24-.75,8.67,8.67,0,0,1-3.19-2.14,9.5,9.5,0,0,1-2-3.31,12.19,12.19,0,0,1-.71-4.23,11.77,11.77,0,0,1,.73-4.16,9.65,9.65,0,0,1,5.3-5.55A10.26,10.26,0,0,1,68,48.07a9.43,9.43,0,0,1,4.43,1,8.89,8.89,0,0,1,3.1,2.63,10.92,10.92,0,0,1,1.75,3.78,13.83,13.83,0,0,1,.38,4.43H63.31A5.56,5.56,0,0,0,64.66,63.75Zm6.18-10.48a3.85,3.85,0,0,0-3-1.08,4.68,4.68,0,0,0-2.17.45,4,4,0,0,0-2.12,2.48,6.63,6.63,0,0,0-.25,1.31h8.9A6.39,6.39,0,0,0,70.84,53.27Z" fill="#fff"/><path d="M85.34,48.61v3.7h.07a6.81,6.81,0,0,1,1-1.71A6.68,6.68,0,0,1,88,49.25a7.37,7.37,0,0,1,1.81-.87,6.64,6.64,0,0,1,2-.31,4.23,4.23,0,0,1,1.19.2v5.08c-.26-.05-.56-.1-.92-.14s-.71-.05-1-.05a5.72,5.72,0,0,0-2.54.5A4.36,4.36,0,0,0,86.78,55a5.6,5.6,0,0,0-.9,2,11,11,0,0,0-.27,2.5v9H80.14V48.61Z" fill="#fff"/><path d="M107.6,48.61v3.66h-4v9.86a2.68,2.68,0,0,0,.46,1.85,2.68,2.68,0,0,0,1.85.46,8.57,8.57,0,0,0,.89,0,6.88,6.88,0,0,0,.81-.11v4.23a11.64,11.64,0,0,1-1.55.15c-.56,0-1.11,0-1.65,0a15.45,15.45,0,0,1-2.41-.17,5.62,5.62,0,0,1-2-.67,3.63,3.63,0,0,1-1.37-1.43,5.09,5.09,0,0,1-.5-2.42V52.27H94.81V48.61h3.31v-6h5.47v6Z" fill="#fff"/><path d="M110.37,45.53V41h5.47v4.5Zm5.47,3.08V68.52h-5.47V48.61Z" fill="#fff"/><path d="M118.07,52.27V48.61h3.27V47.07A5.94,5.94,0,0,1,123,42.72,6.69,6.69,0,0,1,128,41c.49,0,1,0,1.47,0s1,.08,1.42.1v4.08a18.42,18.42,0,0,0-2-.11,2.08,2.08,0,0,0-1.6.52,2.54,2.54,0,0,0-.48,1.75v1.19h3.77v3.66h-3.77V68.52h-5.47V52.27Z" fill="#fff"/><path d="M133.9,45.53V41h5.46v4.5Zm5.46,3.08V68.52H133.9V48.61Z" fill="#fff"/><path d="M148,63.75a5.6,5.6,0,0,0,6.39.36,3.33,3.33,0,0,0,1.46-1.75h4.82a9.1,9.1,0,0,1-3.54,5.12A10.43,10.43,0,0,1,151.34,69a11.4,11.4,0,0,1-4.24-.75,8.67,8.67,0,0,1-3.19-2.14,9.5,9.5,0,0,1-2-3.31,12.19,12.19,0,0,1-.71-4.23,11.77,11.77,0,0,1,.73-4.16A9.64,9.64,0,0,1,144,51.1a9.76,9.76,0,0,1,3.22-2.22,10.26,10.26,0,0,1,4.14-.81,9.43,9.43,0,0,1,4.43,1,8.8,8.8,0,0,1,3.1,2.63,10.92,10.92,0,0,1,1.75,3.78A13.83,13.83,0,0,1,161,59.9H146.64A5.56,5.56,0,0,0,148,63.75Zm6.18-10.48a3.84,3.84,0,0,0-3-1.08,4.7,4.7,0,0,0-2.18.45,4,4,0,0,0-2.12,2.48,6.63,6.63,0,0,0-.25,1.31h8.89A6.3,6.3,0,0,0,154.17,53.27Z" fill="#fff"/><path d="M177.6,66a5.59,5.59,0,0,1-2.52,2.33,8.45,8.45,0,0,1-3.52.71,8.59,8.59,0,0,1-3.93-.86,7.87,7.87,0,0,1-2.79-2.35,10.51,10.51,0,0,1-1.66-3.41,14.39,14.39,0,0,1-.56-4,13.57,13.57,0,0,1,.56-3.87,9.9,9.9,0,0,1,1.66-3.29,8.29,8.29,0,0,1,2.75-2.29,8.16,8.16,0,0,1,3.85-.87,7.86,7.86,0,0,1,3.37.75A5.9,5.9,0,0,1,177.33,51h.08V41h5.47V68.52h-5.2V66Zm-.23-9.84a5.74,5.74,0,0,0-.79-2,4.41,4.41,0,0,0-1.44-1.41,4.25,4.25,0,0,0-2.24-.54,4.46,4.46,0,0,0-2.27.54,4.31,4.31,0,0,0-1.48,1.43,6.38,6.38,0,0,0-.81,2,10.83,10.83,0,0,0-.25,2.37,10.12,10.12,0,0,0,.27,2.31,6.25,6.25,0,0,0,.87,2.06,4.65,4.65,0,0,0,1.5,1.46,4,4,0,0,0,2.17.56,4.37,4.37,0,0,0,2.26-.54A4.14,4.14,0,0,0,176.6,63a6.42,6.42,0,0,0,.77-2.06,12.5,12.5,0,0,0,.23-2.39A12.21,12.21,0,0,0,177.37,56.14Z" fill="#fff"/><path d="M44.08,280.69a4.19,4.19,0,0,0-4.23-3.4c-3.83,0-5.27,3.26-5.27,6.65,0,3.23,1.44,6.49,5.27,6.49,2.6,0,4.07-1.79,4.39-4.35h4.13c-.43,4.84-3.77,7.93-8.52,7.93-6,0-9.52-4.48-9.52-10.07,0-5.75,3.52-10.23,9.52-10.23,4.26,0,7.84,2.5,8.36,7Z" fill="#fff"/><path d="M57.27,279.14c4.42,0,7.27,2.93,7.27,7.41s-2.85,7.38-7.27,7.38S50,291,50,286.55,52.87,279.14,57.27,279.14Zm0,11.88c2.63,0,3.41-2.25,3.41-4.47S59.9,282,57.27,282s-3.4,2.26-3.4,4.51S54.66,291,57.27,291Z" fill="#fff"/><path d="M66.76,279.52h3.66v2.6h.06a5,5,0,0,1,4.48-3,3,3,0,0,1,.84.13v3.58a7.3,7.3,0,0,0-1.39-.13c-2.82,0-3.8,2-3.8,4.5v6.33H66.76Z" fill="#fff"/><path d="M77.86,279.52h3.66v1.79h0a4.67,4.67,0,0,1,4.18-2.17c4.4,0,6.37,3.55,6.37,7.54,0,3.75-2.05,7.25-6.15,7.25a5,5,0,0,1-4.21-2.12h-.05v6.67H77.86Zm10.41,7.06c0-2.23-.89-4.54-3.36-4.54s-3.34,2.26-3.34,4.54.87,4.44,3.37,4.44S88.27,288.85,88.27,286.58Z" fill="#fff"/><path d="M101.24,279.14c4.42,0,7.28,2.93,7.28,7.41s-2.86,7.38-7.28,7.38S94,291,94,286.55,96.85,279.14,101.24,279.14Zm0,11.88c2.63,0,3.42-2.25,3.42-4.47s-.79-4.51-3.42-4.51-3.39,2.26-3.39,4.51S98.64,291,101.24,291Z" fill="#fff"/><path d="M111,279.52h3.67v2.6h0a5,5,0,0,1,4.48-3,3,3,0,0,1,.84.13v3.58a7.22,7.22,0,0,0-1.39-.13c-2.82,0-3.79,2-3.79,4.5v6.33H111Z" fill="#fff"/><path d="M121.4,283.83c.22-3.61,3.45-4.69,6.59-4.69,2.8,0,6.17.62,6.17,4v7.31a7.09,7.09,0,0,0,.49,3.12h-3.92a6.3,6.3,0,0,1-.27-1.36,6.41,6.41,0,0,1-4.72,1.74c-2.66,0-4.77-1.33-4.77-4.21,0-3.17,2.39-3.93,4.77-4.26s4.56-.27,4.56-1.85-1.14-1.89-2.49-1.89-2.42.59-2.56,2.11Zm8.9,2.85c-.65.57-2,.59-3.2.82s-2.28.65-2.28,2.06,1.11,1.79,2.36,1.79a2.87,2.87,0,0,0,3.12-3.23Z" fill="#fff"/><path d="M142,279.52h2.82v2.58H142V289c0,1.31.33,1.63,1.63,1.63a6,6,0,0,0,1.19-.11v3a16,16,0,0,1-2.25.13c-2.36,0-4.42-.55-4.42-3.34V282.1h-2.34v-2.58h2.34v-4.21H142Z" fill="#fff"/><path d="M150.65,277.35h-3.86v-3.18h3.86Zm-3.86,2.17h3.86v14h-3.86Z" fill="#fff"/><path d="M160,279.14c4.42,0,7.28,2.93,7.28,7.41s-2.86,7.38-7.28,7.38-7.24-2.93-7.24-7.38S155.56,279.14,160,279.14ZM160,291c2.64,0,3.42-2.25,3.42-4.47S162.59,282,160,282s-3.39,2.26-3.39,4.51S157.35,291,160,291Z" fill="#fff"/><path d="M169.72,279.52h3.66v2h.08a5,5,0,0,1,4.29-2.33c4.1,0,5.13,2.31,5.13,5.78v8.63H179v-7.93c0-2.3-.69-3.45-2.47-3.45-2.1,0-3,1.17-3,4v7.35h-3.85Z" fill="#fff"/></svg>	
              <p className="theme-font xl:pr-20 text-lg">
                We're committed to the flourishing of our environment & human well-being. And these aren't just things we say: we're legally bound to this commitment. That's what being a <strong className="text-red-500">Public Benefic Corporation</strong> (PBC) means. It also means that every deck of Facilitator Cards purchased leads to more trees & happier bees.
              <br/>
              <a className="text-base md:text-lg inline-block mt-2 underline" href="https://bcorporation.net/about-b-corps" target="_blank" rel="noreferrer noopener">Read more about B Corps &rarr;</a>
            </p>
          </div>     
        </section>
        <section className="theme-font text-lg text-center">
          <div className="wrap py-12">
            <p className="mb-6">Facilitator Cards were developed in sunny Austin &amp; rainy Seattle. You can find us on <a href="https://www.facebook.com/facilitatorcards" title="Facebook">Facebook</a>, <a href="https://www.instagram.com/facilitatorcards" title="Instagram">Instagram</a>, & <a href="https://www.twitter.com/facilitatorcard" title="Twitter">Twitter</a>.</p>
            <p>Facilitator Cards, PBC<br/> P.O. Box 688412<br/> Austin, TX 78768</p>
          </div>
        </section>
      </footer>

    );
  }
}

export default Footer;
