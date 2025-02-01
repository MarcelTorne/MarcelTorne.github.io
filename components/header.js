class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
        .header{
          margin:auto;
          width:100vw;
          margin-top:-10px;
          position: fixed;
          background-color: #e5e8eb;
          margin-bottom: 400px;
        }
        .nav-bar{
          list-style-type: none;
          padding: 0;
          overflow: hidden;
          margin:auto;
          width: max-content;
          border-bottom: 1px solid #8ca0ab;
        }
        .nav-bar li{
            float: left;
            border-right: 1px solid #8ca0ab;
        }
        .nav-bar li:last-child {
            border-right: none;
        }
        
        .nav-bar li a {
            display: block;
            color: #8ca0ab;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        .active {
          color: #435d75; 
        }
        
        .nav-bar li a:hover {
            color: #435d75;
        }

        .my-name-title {
          margin-bottom:10px;
          font-family: 'quicksandlight', Helvetica, serif;
          font-size: 65px;
          color: #435d75;
          text-align: center;
        }

        @font-face {
          font-family: 'quicksandlight';
          src: url('webfontkit/quicksand-variablefont_wght-webfont.woff2') format('woff2'),
              url('webfontkit/quicksand-variablefont_wght-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      
        }
      </style>
      
      <div class="header">
        <h1 class="my-name-title">Marcel Torne Villasevil</h1>

        <ul class="nav-bar">
          <li><a href="short_website.html">About</a></li>
          <li><a href="resume.html">R&#233;sum&#233;</a></li>
          <li><a href="human.asp">Human</a></li>
          <li><a href="Reflections.asp">Reflections</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);