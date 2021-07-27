<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-lists">
        <div class="features">
          <h5>Features</h5>
          <ul>
            <li><a href="#">Analysis</a></li>
            <li><a href="#">Filtering</a></li>
            <li><a href="#">Lookalikes</a></li>
          </ul>
        </div>
        <div class="empty">
          <h5 style="opacity: 0">_</h5>
          <ul>
            <li><a href="#">Targeted Ads</a></li>
            <li><a href="#">Integration</a></li>
            <li><a href="#">Development</a></li>
          </ul>
        </div>
        <div class="solutions">
          <h5>Solutions</h5>
          <ul>
            <li><a href="#">For Business</a></li>
            <li><a href="#">For Agencies</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div class="support">
          <h5>Support</h5>
          <ul>
            <li><a href="#">Knowledge base</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="keep">
          <h5>Keep in touch</h5>
          <ul>
            <li><a href="#">sales@leadenforce.com</a></li>
            <li><a href="#">support@leadenforce.com</a></li>
            <li>
              <a href="#">
                <img src="assets/img/social-icons/linkedin.svg" alt="">
              </a>
              <a href="#">
                <img src="assets/img/social-icons/facebook.svg" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="logo">
          <img src="assets/img/le-logo.svg" alt="">
        </div>
        <div class="links">
          <ul>
            <li><a href="#">Terms & EULA</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div class="copyright">
          <p>© Copyright LeadEnforce 2018. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'Footer'
  }
</script>
<style lang="scss">
  .footer {
    background: #F9F9F9;
    .footer-lists {
      display: flex;
      align-items: start;
      justify-content: space-between;
      padding: 100px 0 50px 0;
      h5 {
        color: #575757;
        padding-bottom: 15px;
        font-size: 1.1em;
        font-weight: 600
      }
      ul {
        li {
          a {
            display: flex;
            width: 100%;
            padding: 10px 0;
            color: #8D8D8D;
            font-size: 0.95em
          }
        }
      }
    }
    .footer-copyright {
      border-top: 1px solid rgba(86, 84, 90, 0.25);
      padding: 50px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 150px;
        img {
          width: 100%;
        }
      }
      .links {
        margin-right: auto;
        ul {
          display: flex;
          align-items: center;
          flex-direction: row;
          li {
            padding: 0 30px;
            font-size: 0.9em;
            a {
              color: #B2B2B2
            }
          }
        }
      }
      .copyright {
        p {
          color: #B2B2B2;
          font-size: 0.9em;
        }
      }
    }
  }
</style>
