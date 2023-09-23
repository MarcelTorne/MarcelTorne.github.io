class BottomBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
        @import url(https://fonts.googleapis.com/css?family=Lato);
        @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);

        .bottom-bar{
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: #e5e8eb;
        }
        
        .bottom-bar ul{
            float: left;
            display: flex;
            column-gap: 20px;
            justify-content: space-between;
            text-align: center;
        }
        
        .social-icons a {
            display: inline-block;
            position: relative;
            cursor: pointer;
            width: 50px;
            height: 50px;
            border:2px solid #8ca0ab;
            box-shadow: 0 2px 2px #999;
            padding: 0px;
            text-decoration: none;
            text-align: center;
            color: #fff;
            font-size: 25px;
            font-weight: normal;
            line-height: 2em;
            border-radius: 26px;
            -moz-border-radius:26px;
            -webkit-border-radius:26px;
            background-color: #8ca0ab;
            color: #e5e8eb;
        }

        .social-icons a:hover{
            background-color: #e5e8eb;
            color: #8ca0ab;
        }

        .bottom-bar ul{
            list-style-type: none;
        }

    
      </style>
      
        <div class="bottom-bar">
            <ul class="social-icons">
                <li><a href="https://www.linkedin.com/in/marceltorne/?locale=en_US" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
                <li><a href="https://github.com/MarcelTorne" class="social-icon"> <i class="fa fa-github"></i></a></li>
                <li><a href="https://twitter.com/marceltornev" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
                <li><a href="mailto:marcelto@mit.edu" class="social-icon"> <i class="fa fa-envelope-o"></i></a></li>
                <li><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjI3qTz0sGBAxVJMlkFHcA5Bx0QFnoECBEQAQ&url=https%3A%2F%2Fscholar.google.com%2Fcitations%3Fuser%3DITlelQ8AAAAJ%26hl%3Den&usg=AOvVaw1AF24oC_kxloqk3FobE7r_&opi=89978449" class="social-icon"> <i class="fa fa-book"></i></a></li>
            </ul>
        </div>
      `;
    }
  }
  
  customElements.define('bottom-bar-component', BottomBar);