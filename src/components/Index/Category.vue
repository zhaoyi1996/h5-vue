<template>
  <div class="hello">

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
    <!-- header slider -->
    <section>
      <!-- top news -->
      <div class="wrap wrap_white">
        <div class="container title">
          <h2 class="title__h1 underscore">Economy</h2>
        </div>
      </div>
      <div class="wrap wrap_gray pt20">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="thumbnail thumbnail_big">
                <img src="@/assets/img/content/news1.jpg" height="349" width="560" alt="News">
                <div class="caption thumbnail__caption">
                  <div class="news caption__news">
                    <p class="news__category yellow-line">Economy</p>
                    <a href="#" class="news__head">The dollar has broken all records of positive change in the world and in the galaxy</a>
                    <p class="news__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div class="posted">
                    <span class="posted__date">today, 16:37</span>
                    <ul class="posted__icon">
                      <li>
                                                <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                      </li>
                      <li>
                                                <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="thumbnail thumbnail_small">
                <a href="news.html" class="thumbnail__link">
                  <img src="@/assets/img/content/news2.jpg" height="153" width="270" alt="News">
                </a>
                <div class="caption thumbnail__caption">
                  <div class="news caption__news">
                    <p class="news__category yellow-line">Economy</p>
                    <a href="news.html" class="news__link">
                      <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                    </a>
                  </div>
                  <div class="posted">
                    <span class="posted__date">today, 12:30</span>
                    <ul class="posted__icon">
                      <li>
                                                <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                      </li>
                      <li>
                                                <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="thumbnail thumbnail_small">
                <a href="news.html" class="thumbnail__link">
                  <img src="@/assets/img/content/news3.jpg" height="153" width="270" alt="News">
                </a>
                <div class="caption thumbnail__caption">
                  <div class="news caption__news">
                    <p class="news__category yellow-line">Economy</p>
                    <a href="news.html" class="news__link">
                      <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                    </a>
                  </div>
                  <div class="posted">
                    <span class="posted__date">today, 12:30</span>
                    <ul class="posted__icon">
                      <li>
                                                <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                      </li>
                      <li>
                                                <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="thumbnail thumbnail_small">
                <a href="news.html" class="thumbnail__link">
                  <img src="@/assets/img/content/news4.jpg" height="153" width="270" alt="News">
                </a>
                <div class="caption thumbnail__caption">
                  <div class="news caption__news">
                    <p class="news__category yellow-line">Economy</p>
                    <a href="news.html" class="news__link">
                      <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                    </a>
                  </div>
                  <div class="posted">
                    <span class="posted__date">today, 12:30</span>
                    <ul class="posted__icon">
                      <li>
                                                <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                      </li>
                      <li>
                                                <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="thumbnail thumbnail_small">
                <a href="news.html" class="thumbnail__link">
                  <img src="@/assets/img/content/news5.jpg" height="153" width="270" alt="News">
                </a>
                <div class="caption thumbnail__caption">
                  <div class="news caption__news">
                    <p class="news__category yellow-line">Economy</p>
                    <a href="news.html" class="news__link">
                      <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                    </a>
                  </div>
                  <div class="posted">
                    <span class="posted__date">today, 12:30</span>
                    <ul class="posted__icon">
                      <li>
                                                <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                      </li>
                      <li>
                                                <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="thumbnail thumbnail_small">
                <a href="news.html" class="thumbnail__link">
                  <img src="@/assets/img/content/news6.jpg" height="153" width="270" alt="News">
                </a>
                <div class="caption thumbnail__caption">
                  <div class="news caption__news">
                    <p class="news__category yellow-line">Economy</p>
                    <a href="news.html" class="news__link">
                      <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                    </a>
                  </div>
                  <div class="posted">
                    <span class="posted__date">today, 12:30</span>
                    <ul class="posted__icon">
                      <li>
                                                <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                      </li>
                      <li>
                                                <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="thumbnail thumbnail_small">
                <a href="news.html" class="thumbnail__link">
                  <img src="@/assets/img/content/news7.jpg" height="153" width="270" alt="News">
                </a>
                <div class="caption thumbnail__caption">
                  <div class="news caption__news">
                    <p class="news__category yellow-line">Economy</p>
                    <a href="news.html" class="news__link">
                      <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                    </a>
                  </div>
                  <div class="posted">
                    <span class="posted__date">today, 12:30</span>
                    <ul class="posted__icon">
                      <li>
                                                <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                      </li>
                      <li>
                                                <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="thumbnail thumbnail_small">
                <a href="news.html" class="thumbnail__link">
                  <img src="@/assets/img/content/news8.jpg" height="153" width="270" alt="News">
                </a>
                <div class="caption thumbnail__caption">
                  <div class="news caption__news">
                    <p class="news__category yellow-line">Economy</p>
                    <a href="news.html" class="news__link">
                      <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                    </a>
                  </div>
                  <div class="posted">
                    <span class="posted__date">today, 12:30</span>
                    <ul class="posted__icon">
                      <li>
                                                <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                      </li>
                      <li>
                                                <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="thumbnail thumbnail_small">
                <a href="news.html" class="thumbnail__link">
                  <img src="@/assets/img/content/news9.jpg" height="153" width="270" alt="News">
                </a>
                <div class="caption thumbnail__caption">
                  <div class="news caption__news">
                    <p class="news__category yellow-line">Economy</p>
                    <a href="news.html" class="news__link">
                      <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                    </a>
                  </div>
                  <div class="posted">
                    <span class="posted__date">today, 12:30</span>
                    <ul class="posted__icon">
                      <li>
                                                <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                      </li>
                      <li>
                                                <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 p0">
              <div class="col-sm-6">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/img/content/news10.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                    <i class="icon-comment-empty"></i>29
                                                </span>
                        </li>
                        <li>
                                                    <span>
                                                    <i class="icon-eye"></i>2.3k
                                                </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/img/content/news11.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                    <i class="icon-comment-empty"></i>29
                                                </span>
                        </li>
                        <li>
                                                    <span>
                                                    <i class="icon-eye"></i>2.3k
                                                </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/img/content/news12.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                    <i class="icon-comment-empty"></i>29
                                                </span>
                        </li>
                        <li>
                                                    <span>
                                                    <i class="icon-eye"></i>2.3k
                                                </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/img/content/news13.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                    <i class="icon-comment-empty"></i>29
                                                </span>
                        </li>
                        <li>
                                                    <span>
                                                    <i class="icon-eye"></i>2.3k
                                                </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="thumbnail thumbnail_big">
                <img src="@/assets/img/content/news1.jpg" height="349" width="560" alt="News">
                <div class="caption thumbnail__caption">
                  <div class="news caption__news">
                    <p class="news__category yellow-line">Economy</p>
                    <a href="#" class="news__head">The dollar has broken all records of positive change in the world and in the galaxy</a>
                    <p class="news__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div class="posted">
                    <span class="posted__date">today, 16:37</span>
                    <ul class="posted__icon">
                      <li>
                                                <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                      </li>
                      <li>
                                                <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ajax_load">
          <i class="icon-arrows-cw"></i>Load more
          <svg width="128" height="40" viewBox="0 0 128 40" xmlns="http://www.w3.org/2000/svg">
            <rect x='0' y='0' fill='none' width='128' height='40'></rect>
          </svg>
        </div>
      </div>
      <!-- /container-->
    </section>
    <!-- /top news -->
    <section class="wrap wrap_gray">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 projects">
            <div class="projects__title">
              <h2 class="block-title__h2">Special project</h2>
            </div>
            <div class="projects__row">
              <div class="special special_big">
                <img src="@/assets/img/content/spec1.jpg" height="311" width="551" alt="image" class="special__img">
                <div class="special__box">
                  <h5 class="special__category yel_line">Special project</h5>
                  <a href="#" class="special__link">Lorem ipsum dolor sit amet</a>
                  <p class="special__desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
              <div class="special special_small">
                <img src="@/assets/img/content/spec2.jpg" height="311" width="285" alt="image" class="special__img">
                <div class="special__box">
                  <h5 class="special__category yel_line">Special project</h5>
                  <a href="#" class="special__link">Lorem ipsum dolor</a>
                  <p class="special__desc">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                </div>
              </div>
            </div>
            <div class="projects__row">
              <div class="special special_small">
                <img src="@/assets/img/content/spec3.jpg" height="311" width="285" alt="image" class="special__img">
                <div class="special__box">
                  <h5 class="special__category yel_line">Special project</h5>
                  <a href="#" class="special__link">Lorem ipsum dolor</a>
                  <p class="special__desc">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                </div>
              </div>
              <div class="special special_big">
                <img src="@/assets/img/content/spec4.jpg" height="311" width="551" alt="image" class="special__img">
                <div class="special__box">
                  <h5 class="special__category yel_line">Special project</h5>
                  <a href="#" class="special__link">Lorem ipsum dolor sit amet</a>
                  <p class="special__desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
            </div>
            <!-- banner -->
            <div class="banner">
              <img src="@/assets/img/content/banner.jpg" height="221" width="850" alt="image" class="banner__img">
              <div class="banner__box">
                <p class="banner__text first-text">Advertising</p>
                <p class="banner__text second-text">Here</p>
                <a href="#" class="banner__link">Get Now</a>
              </div>
            </div>
            <!-- END banner -->
          </div>
          <div class="col-sm-3">
            <div class="block-title">
              <h2 class="block-title__h2">Twitter</h2>
            </div>
            <div class="twitter">
              <div class="twitter__header">
                <p class="twitter__header__name">@barclee</p>
                <p class="twitter__header__text">Hello, world</p>
              </div>
              <div class="twitter__body">
                <div class="message">
                  <p class="message__time">about 5 hours ago</p>
                  <p class="message__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="#" class="message__link">
                    <i class="icon-reply"></i>Reply
                  </a>
                </div>
                <div class="message">
                  <p class="message__time">about 5 hours ago</p>
                  <p class="message__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="#" class="message__link">
                    <i class="icon-reply"></i>Reply
                  </a>
                </div>
                <div class="message">
                  <p class="message__time">about 5 hours ago</p>
                  <p class="message__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="#" class="message__link">
                    <i class="icon-reply"></i>Reply
                  </a>
                </div>
                <div class="message">
                  <p class="message__time">about 5 hours ago</p>
                  <p class="message__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="#" class="message__link">
                    <i class="icon-reply"></i>Reply
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
