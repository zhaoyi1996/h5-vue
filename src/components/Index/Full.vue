<template>
  <div class="hello">
    <div class="wrapper-sticky-footer">
      <div class="content-sticky">
        <!-- Header -->
        <header id="header" class="header">
          <div class="header__top">
            <div class="container">
              <div class="row">
                <div class="col-sm-3">
                  <div class="wrap-logo">
                    <a href="index.html" class="logo"></a>
                  </div>
                </div>
                <div class="col-sm-offset-2 col-md-offset-5 col-sm-6 col-md-4 hidden-xs">
                  <div class="col-xs-4 col-sm-5">
                    <div class="weather">
                      <div class="weather__temperature">
                        <span class="icon-sun"></span>
                        <em class="active">+8 C</em>
                        <em>+2 C</em>
                        <em>+3 C</em>
                      </div>
                      <div class="weather__city">
                        <em>London</em>
                        <div class="weather__city__list">
                          <ul>
                            <li class="active">
                              <a href="#">London</a>
                            </li>
                            <li>
                              <a href="#">Moscow</a>
                            </li>
                            <li>
                              <a href="#">Kiev</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-7">
                    <div class="exchange">
                      <p class="exchange__name">Central Bank Rate</p>
                      <p class="exchange__course">
                        $<span>32.32</span>&#8364;<span>28.23</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="wsmenucontent overlapblackbg"></div>
          <div class="wsmenuexpandermain slideRight">
            <a id="navToggle" class="animated-arrow slideLeft">
              <span></span>
            </a>
          </div>
          <div class="header_down">
            <div class="container">
              <div class="wrapper clearfix bigmegamenu">
                <!--Main Menu HTML Code-->
                <nav class="wsmenu slideLeft clearfix">
                  <ul class="mobile-sub wsmenu-list">
                    <li class="visible-xs">
                      <form class="navbar-form mob_search" role="search">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Search">
                        </div>
                        <button type="submit" class="btn btn-search">
                          <i class="icon-search"></i>
                        </button>
                      </form>
                    </li>

                    <li class="active">
                      <span class="wsmenu-click"></span>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="category.html">Policy</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="category.html">Sport</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="category.html">Holidays</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="category.html">Religion</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="category.html">People</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="category.html">Main</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="">Other
                        <span class="arrow"></span>
                      </a>
                      <ul class="wsmenu-submenu">
                        <li>
                          <a href="404.html">404 page</a>
                        </li>
                        <li>
                          <a href="category.html">Category page</a>
                        </li>
                        <li>
                          <a href="news.html">News page</a>
                        </li>
                        <li>
                          <a href="search-result.html">Search result</a>
                        </li>
                        <li>
                          <a href="full-width.html">Full width</a>
                        </li>
                      </ul>
                    </li>
                    <li class="navbar-right hidden-xs">
                      <form class="navbar-form " role="search">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Search">
                        </div>
                        <button type="submit" class="btn btn-search">
                          <i class="icon-search"></i>
                          <br>Search
                        </button>
                      </form>
                    </li>
                    <li>
                      <div class="visible-xs col-sm-offset-5 col-sm-4">
                        <div class="col-sm-5">
                          <div class="weather">
                            <div class="weather__temperature">
                              <span class="icon-sun"></span>
                              <em>+8 C</em>
                            </div>
                            <div class="weather__city">
                              <em>London</em>
                              <div class="weather__city__list">
                                <ul>
                                  <li class="active">
                                    <a href="#">London</a>
                                  </li>
                                  <li>
                                    <a href="#">Moscow</a>
                                  </li>
                                  <li>
                                    <a href="#">Kiev</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-7">
                          <div class="exchange">
                            <p class="exchange__name">Central Bank Rate</p>
                            <p class="exchange__course">
                              $<span>32.32</span>&#8364;<span>28.23</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
                <!--Menu HTML Code-->
              </div>
            </div>
          </div>
        </header>
        <!-- END header -->
        <!-- content-->
        <!-- title -->
        <div class="wrap wrap_white">
          <div class="container title">
            <h1 class="title__h1 underscore">Economy</h1>
          </div>
        </div>
        <!-- END title -->
        <div class="wrap wrap_gray pt20">
          <div class="container">
            <div class="row">
              <div class="wrap-thumbnail">
                <div class="thumbnail">
                  <div class="thumbnail__news news">
                    <p class="news__category underscore">Economy</p>
                    <a href="" class="news__caption">Can explode at anytime: Scientists reveal giant sinkhole to appear in Siberia</a>
                    <p class="news__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</p>
                    <p class="news__desc"><strong>Can explode at anytime: Scientists reveal giant sinkhole to appear in Siberia</strong></p>
                    <p class="news__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores ea fuga inventore laudantium, minima non quam repellat temporibus voluptatem. Ab accusantium ad aliquid aperiam beatae consequatur cumque
                      deleniti distinctio dolorem doloremque ducimus ea eaque enim eos error esse est explicabo fugit incidunt inventore ipsam, laborum laudantium magni nam, odit omnis praesentium quaerat quam, quia quidem recusandae
                      similique soluta temporibus totam velit veritatis voluptatibus. Architecto culpa dolorem inventore minima officiis optio, sit? Ab aliquid assumenda dolores facilis, fugiat hic illum laudantium maiores minus
                      nam nemo nihil nulla, quae quia sint, ullam ut. Animi atque debitis fugiat, id incidunt labore porro quasi recusandae! Assumenda dolor eligendi fugiat iusto labore quisquam saepe voluptas voluptates. Adipisci
                      amet architecto aut commodi cum deserunt dolore doloremque ea esse et eum expedita explicabo itaque iure modi numquam odio optio possimus praesentium quae, quaerat quam quo repellendus tenetur veniam vero voluptatem
                      voluptates. Aliquam debitis explicabo fuga voluptatem.
                    </p>
                  </div>
                </div>
                <div class="thumbnail">
                  <div class="thumbnail__news news">
                    <p class="news__category underscore">Economy</p>
                    <a href="" class="news__caption">Can explode at anytime: Scientists reveal giant sinkhole to appear in Siberia</a>
                    <p class="news__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</p>
                    <p class="news__desc"><strong>Can explode at anytime: Scientists reveal giant sinkhole to appear in Siberia</strong></p>
                    <p class="news__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores ea fuga inventore laudantium, minima non quam repellat temporibus voluptatem. Ab accusantium ad aliquid aperiam beatae consequatur cumque
                      deleniti distinctio dolorem doloremque ducimus ea eaque enim eos error esse est explicabo fugit incidunt inventore ipsam, laborum laudantium magni nam, odit omnis praesentium quaerat quam, quia quidem recusandae
                      similique soluta temporibus totam velit veritatis voluptatibus. Architecto culpa dolorem inventore minima officiis optio, sit? Ab aliquid assumenda dolores facilis, fugiat hic illum laudantium maiores minus
                      nam nemo nihil nulla, quae quia sint, ullam ut. Animi atque debitis fugiat, id incidunt labore porro quasi recusandae! Assumenda dolor eligendi fugiat iusto labore quisquam saepe voluptas voluptates. Adipisci
                      amet architecto aut commodi cum deserunt dolore doloremque ea esse et eum expedita explicabo itaque iure modi numquam odio optio possimus praesentium quae, quaerat quam quo repellendus tenetur veniam vero voluptatem
                      voluptates. Aliquam debitis explicabo fuga voluptatem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END content-->
      </div>
      <!-- Footer -->
      <footer class="footer slate_gray">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <p class="copyright">Copyright &copy; 2017.Company name All rights reserved.<a target="_blank" href="http://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></p>
            </div>
            <div class="col-sm-6">
              <div class="social navbar-right">
                <p class="social__text">We are in social networks</p>
                <ul class="social__list">
                  <li class="social__item">
                    <a class="facebook" href="#">
                      <i class="icon-facebook"></i>
                    </a>
                  </li>
                  <li class="social__item">
                    <a class="twitter" href="#">
                      <i class="icon-twitter"></i>
                    </a>
                  </li>
                  <li class="social__item">
                    <a class="gplus" href="#">
                      <i class="icon-gplus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import '@/assets/css/main.css'
import '@/assets/js/jquery.min.js'
import '@/assets/js/bootstrap.min.js'
import '@/assets/js/main.js'
import '@/assets/css/dongdong.css';
import "@/assets/css/reset.css";
import "@/assets/css/typography.css";
import "@/assets/css/webslidemenu.css";
import "@/assets/css/fontello.css";
import "@/assets/css/bootstrap.min.css";
export default {
  name: 'Full',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
