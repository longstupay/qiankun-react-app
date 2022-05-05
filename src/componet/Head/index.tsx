import { Link } from "react-router-dom";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import "./index.css";

// 未拆分的组件

function showMenu() {
  const menu = document.querySelector('#menu') as HTMLElement;
  menu.classList.toggle('translate-y-[-200%]');
  changeMuenIcon(menu)
}

function changeMuenIcon(menu:HTMLElement) {
  const isContainTranslate = menu.classList.contains('translate-y-[-200%]');
  const icon = isContainTranslate ?'Menu' : 'icon-close';
  const menuIcon = document.querySelector('#icon-menu') as HTMLImageElement;
  // https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/icon-close.svg
  menuIcon.src = `https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/${icon}.svg`;
}
// close menu when click nav list
function closeMenu() {
  const menu = document.querySelector('#menu') as HTMLElement;
  menu.classList.add('translate-y-[-200%]');
  changeMuenIcon(menu)
}

// toggle theme
function toggleTheme() {
  // console.log('toggle theme');
  const html = document.querySelector('html') as HTMLElement;
  const img = document.querySelector('#icon-theme') as HTMLImageElement;
  html.classList.toggle('dark');
  const isDark = html.classList.contains('dark');
  const icon = isDark ? 'icon-sun' : 'icon-dark';
  img.src = `https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/${icon}.svg`;
}

const Header = () => {
  return (
    <>
      {/* NavBar */}
      <nav className="nav">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <h1 className="relative z-30 font-semibold text-2xl">
            Huang Q
          </h1>
          <div className="flex items-center flex-row-reverse md:flex-row gap-3 md:gap-12">
              {/* Menu List */}
              <ul id="menu" className="nav-menus translate-y-[-200%] md:translate-y-0">
                <a onClick={closeMenu} className="nav-link" href="#home">主页</a>
                <a  onClick={closeMenu}  className="nav-link" href="#about">个人信息</a>
                <a  onClick={closeMenu} className="nav-link" href="#portfolio">最近项目</a>
                <a  onClick={closeMenu} className="nav-link" href="#contact">联系我</a>
              </ul>
              {/* Mobile Menu Button */}
              <button id='toggle-menu' onClick={showMenu} className='ralative w-12 z-30 p-2 md:hidden dark:invert'>
                <img id='icon-menu' src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/Menu.svg" alt="menu" />
              </button>
              {/* toggle Theme */}
              <button onClick={toggleTheme} className='relative z-30 dark:invert'>
                <img id='icon-theme' className='md:opacity-70 w-7 md:-md-1' src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/icon-dark.svg" alt="theme" />
              </button>
          </div>
        </div>
      </nav>

      <main className="container">
        <section id="home" className="home-section">
          <div className="order-2 md:order-1 mt-10">
            <h2 className="text-5xl md:text-7xl font-bold">
              Hi,
            </h2>
            <h2 className="text-5xl md:text-7xl font-bold mt-2">
              I'm <span className=" text-cyan-500">HuangQ</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold opacity-70 mt-5 mb-10">
              前端工程师
            </h3>
            <a href="#portfolio" className="btn-primary">see my work</a>
          </div>
          <div className="container-hero-image">
            <img className="w-full h-full object-cover opacity-90 object-center" loading="lazy" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/hero.jpg" alt="profile" />
            {/* <LazyLoadImage className="w-full h-full object-cover opacity-90 object-center" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/hero.jpg" alt="hero" effect="blur" /> */}
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-32">
          {/* describe */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
            <div className="rounded-full w-48 md:w-64 h-48 md:h-64 overflow-hidden bg-cyan-500">
              <img className="w-full h-full object-cover opacity-90" loading="lazy" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/hero.jpg" alt="profile" />
              {/* <LazyLoadImage className="w-full h-full object-cover opacity-90" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/hero.jpg" alt="profile" effect="blur" /> */}
            </div>
            <div className="w-full md:w-1/2 text-base md:text-lg text-center md:text-left">
              <h2 className="text-cyan-500 font-bold text-2xl md:text-3xl mb-3">Hi,I'm Huang Q</h2>
              <p className="mb-3 opacity-70">
                学历:本科
              </p>
              <p className=" opacity-70"> 熟练运用html、css、JavaScript进行网页制作;掌握ES6,TypeScript;掌握NodeJS,可使用Nest,Midway开发后台管理;掌握vue,react,angular; 掌握Taro开发微信小程序;了解使用Figma设计B端页面；熟练使用docker部署常见应用</p>
            </div>
          </div>
          {/* my skill */}
          <div className="mt-32 text-center">
            <h2 className="text-center text-cyan-500 font-bold text-3xl md:text-4xl mb-14">专业技能</h2>
            <div className="flex flex-wrap items-center justify-center gap-24 md:gap-12">
              <div className="skill" data-text="javascript">
                <img className="w-12 h-12" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/javascript.png" alt="javascript" />
              </div>
              <div className="skill" data-text="react">
                <img className="w-12 h-12" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/reactjs.png" alt="react" />
              </div>
              <div className="skill" data-text="tailwindcss">
                <img className="w-12 h-12" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/tailwindcss.png" alt="tailwindcss" />
              </div>
              <div className="skill" data-text="vue">
                <img className="w-12 h-12" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/vuejs.png" alt="vue" />
              </div>
              
            </div>
          </div>
        </section>
        {/* dots */}
        <div className="hidden md:flex items-center justify-between gap-3 w-full">
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-gradient-to-r from-cyan-400/60 to-cyan-400/0 flex-grow h-3"></div>
        </div>
        {/* portfolio section */}
        <section id="portfolio" className="pt-32">
          <h2 className="portfolio-heading">
            最近项目
          </h2>
          <ul className="w-full md:w-5/6 space-y-10 py-5">
            <li className="portfolio-card">
              <div className="w-full md:w-1/3 h-60">
                <img className="h-full w-full object-cover" loading="lazy" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/random-portfolio.jpg" alt="portfolio" />
              </div>
              <div className="w-full md:w-2/3 p-5">
                  <h2 className="text-3xl font-bold mb-3 text-left">
                    React App
                  </h2>
                  <p className="text-left">
                    用于个人网站的主页信息，结合了react和tailwindcss，使用Figma构图。在微应用中是主应用。
                  </p>
                  <div className="mt-8 font-semibold text-white flex items-center gap-2">
                    <a className="portfolio-link bg-cyan-400" href="https://github.com/longstupay/qiankun-react-app">
                      <img className="w-5 h-5" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/github.svg" alt="github" />
                      github</a>
                    <Link className="portfolio-link bg-gray-600 dark:bg-black" to="/">
                      <img className="w-5 h-5" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/web.svg" alt="website" />
                      website</Link>
                  </div>
                </div>
            </li>

            <li className="portfolio-card">
              <div className="w-full md:w-1/3 h-60">
                <img className="h-full w-full object-cover" loading="lazy" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/random-portfolio.jpg" alt="portfolio" />
              </div>
              <div className="w-full md:w-2/3 p-5">
                  <h2 className="text-3xl font-bold mb-3 text-left">
                    Angular App
                  </h2>
                  <p className="text-left">
                    个人网站子应用，计划处理网站的邮件管理 留言页面，暂无。
                  </p>
                  <div className="mt-8 font-semibold text-white flex items-center gap-2">
                    <a className="portfolio-link bg-cyan-400 a-hover" href="#github-ng" onClick={e=>e.preventDefault()}>
                      <img className="w-5 h-5" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/github.svg" alt="github" />
                      github</a>
                    <Link  className="portfolio-link bg-gray-600 dark:bg-black" to="/app3">
                      <img className="w-5 h-5" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/web.svg" alt="website" />
                      website</Link>
                  </div>
                </div>
            </li>

            <li className="portfolio-card">
              <div className="w-full md:w-1/3 h-60">
                <img className="h-full w-full object-cover" loading="lazy" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/random-portfolio.jpg" alt="portfolio" />
              </div>
              <div className="w-full md:w-2/3 p-5">
                  <h2 className="text-3xl font-bold mb-3 text-left">
                    Vue App
                  </h2>
                  <p className="text-left">
                    vue子应用，计划配合Rss订阅展示咨询，或者展示后期python 抓取的数据。仍在建设。
                  </p>
                  <div className="mt-8 font-semibold text-white flex items-center gap-2">
                    <a className="portfolio-link bg-cyan-400 a-hover" href="#github-vue" onClick={e=>e.preventDefault()}>
                      <img className="w-5 h-5" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/github.svg" alt="github" />
                      github</a>
                    <Link className="portfolio-link bg-gray-600 dark:bg-black" to="/myapp2">
                      <img className="w-5 h-5" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/web.svg" alt="website" />
                      website</Link>
                  </div>
                </div>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer-page dark:bg-gray-900/80">
        <div className="container mt-9 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section className="w-full">
            <h2 className="secondary-title text-white my-11">Contact Me</h2>
            <p id="contact" className="section-paragraph text-white">请随时联系我，通过下面的任何方法。</p>
            <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-9">
              <div className="space-y-12 mb-6">
                <div>
                  <label className="text-white block mb-6 text-xl font-bold">Name</label>
                  <input className="w-full border border-input-border bg-input px-4 py-4" placeholder="暂无实现，仍在规划" />
                </div>
                <div>
                  <label className="text-white block mb-6 text-xl font-bold">Email</label>
                  <input type="email" className="w-full border border-input-border bg-input px-4 py-4" placeholder="暂无实现，仍在规划" />
                </div>
                <div>
                  <label className="text-white block mb-6 text-xl font-bold">Message</label>
                  <textarea className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none" placeholder="暂无实现，仍在规划" defaultValue={""} />
                </div>
                <button className="px-6 py-2 mb-4 bg-white text-black font-bold a-hover">发送</button>
              </div>
              <div className="mt-12 mb-8">
                {/* Contact info */}
                <p className="text-secondary text-white">1824-997-4648</p>
                <a href="mailto:email@mydomain.com" className="text-secondary underline mt-3 block text-white">76178271zyw@gmail.com</a>
                {/* Socials */}
                <div className="flex mt-20 space-x-6">
                  {/* qq */}
                  <a href="#1">
                    <svg className="w-8 h-8 lg:w-12 lg:h-12" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3352" width="200" height="200"><path d="M512.009337 0C229.23422 0 0 229.23422 0 511.990663c0 282.775117 229.23422 512.009337 512.009337 512.009337 282.775117 0 512.009337-229.23422 512.009337-512.009337C1024 229.23422 794.76578 0 512.009337 0zM801.26464 668.859701c-21.737567 18.637536-49.955319-61.346999-54.007769-49.040249-9.879014 29.935842-14.529061 49.936644-43.643208 82.505644-1.550016 1.736764 33.670819 14.473036 43.643208 41.62632 9.542867 26.03279 28.143053 67.285613-93.486477 80.227308-71.375413 7.582004-122.936772-38.022067-128.09104-37.592545-9.524192 0.84037-5.284993 0-15.51883 0-8.366349 0-8.926595 0.616271-16.807397 0-2.166287-0.168074-25.883391 37.592545-131.975416 37.592545-82.225521 0-103.514891-51.748108-86.987617-80.227308 16.545949-28.460526 44.128755-36.752175 40.244378-41.252822-19.141758-22.185764-32.363577-45.921544-40.244378-67.360312-1.942188-5.341017-3.585578-10.532635-4.874145-15.51883-2.987982-11.447705-25.883391 67.229588-50.459541 49.040249-24.576149-18.170664-22.391188-64.40968-6.480185-108.687834 16.060402-44.614302 56.491529-87.585213 56.939726-97.072055 1.624715-35.295534-3.473529-41.159448 0-50.422191 7.750078-20.766473 17.19957-12.792297 17.19957-23.567706 0-135.729068 100.863057-245.761494 225.293819-245.761494 124.412088 0 225.275145 110.032426 225.275145 245.761494 0 5.210293 13.520617 0 19.982128 23.567706 1.325917 4.874145 2.259661 23.66108 0.672296 50.422191-0.746995 12.848321 34.268415 28.497875 52.364379 97.072055C828.436598 628.764722 810.321959 661.109624 801.26464 668.859701z" p-id="3353" fill="#ffffff"></path></svg>
                  </a>
                  {/* qq */}
                  <a href="#2">
                    <svg className="w-8 h-8 lg:w-12 lg:h-12" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4307" width="200" height="200"><path d="M512 1024C229.23 1024 0 794.77 0 512S229.23 0 512 0s512 229.23 512 512-229.23 512-512 512z m107.91-626.371H640c-20.09-94.744-115.566-162.962-225.304-162.962-124.002 0-222.696 86.04-222.696 198.607 0 65.097 34.572 115.492 89.43 156.94l-23.114 71.12 77.995-41.448a354.748 354.748 0 0 0 77.97 11.8h20.114a133.608 133.608 0 0 1-5.851-47.47 193.122 193.122 0 0 1 57.466-134.412 181.37 181.37 0 0 1 133.096-52.175h0.804z m-115.273-56.296c15.848 0 28.696 14.288 28.696 31.915s-12.848 31.915-28.696 31.915c-17.652 1.95-33.402-12.313-35.304-31.94 0-22.284 17.457-31.89 34.719-31.89h0.585z m-171.032 63.878c-17.555 1.463-33.012-12.653-34.938-31.89 1.926-19.212 17.383-33.329 34.938-31.89 16.042 0 29.062 14.287 29.062 31.915 0 17.603-13.02 31.89-29.062 31.89zM832 574.805c0-92.233-90.136-169.472-192-169.472-107.764 0-192 77.24-192 169.448 0 92.257 84.456 169.496 192 169.496a264.24 264.24 0 0 0 66.828-11.873L767.586 768l-17.408-59.538c49.42-35.596 81.017-83.286 81.017-133.852l0.805 0.195zM573.562 554.52c-10.435 0-18.895-9.484-18.895-21.187s8.46-21.211 18.895-21.211c11.727-1.39 22.308 7.997 23.771 21.114-1.39 13.214-11.97 22.698-23.771 21.284z m128 0.098c-10.435 0-18.895-9.509-18.895-21.212 0-11.751 8.46-21.26 18.895-21.26 11.727-1.414 22.308 7.997 23.771 21.139-2.194 12.921-12.58 22.04-24.259 21.333h0.488z" p-id="4308" fill="#ffffff"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div></div>
      </footer>
    </>
  );
}

export default Header;