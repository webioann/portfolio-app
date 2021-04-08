import '../STYLES/Skills.scss';

function Skills() {
  return (
    <div className="container bg-for-skills">
      <div className="row resume">

        <div className="col-3 about-me">
          <div className="row avatar">
            <div className="col photo"></div>
          </div>
          <div className="col name">
            <span>name </span>
            <h2>Veles Alexander</h2> 
            <span>age / marige</span>
            <h5>43 years is old / merige</h5>
            <span>nationality</span>
            <h5>Ukrainian</h5> 
            <span>location</span>
            <h5>Sarny</h5>
            <div className='row border-bot'></div>
          </div>
          <div className="col progress-bar">
            <h4 className='skills-title'>Skills</h4>
            <div className="row progress-box">
                <div className="react"> react (redux)</div>
            </div>
            <div className="row progress-box">
                <div className="js"> java-script</div>
            </div>
            <div className="row progress-box">
              <div className="css"> css</div>
            </div>
            <div className="row progress-box">
              <div className="html"> html</div>
            </div>
            <div className="row progress-box">
              <div className="eng"> english</div>
            </div>

          </div>
        </div>

        <div className="col-9 skills-wraper">
          <div className="col">
              <h4 className="row big-name">My name Veles Alexander</h4>
              <div className='row border-bot'></div>
            <div className="col resume-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus mollitia veritatis quaerat perferendis molestias officiis ad? Est impedit modi cum qui fugiat accusamus ullam quae tempore, dicta exercitationem dolores reiciendis labore hic itaque officia dolor. Rem vitae libero qui ipsam dolores a eum ea molestiae recusandae et doloribus ad eaque voluptate accusantium quasi sit quae, est officiis fugiat fuga inventore quod. Quibusdam dolor doloremque quaerat, iste iusto, vel maiores autem necessitatibus cupiditate perferendis nulla! Obcaecati, </p>
              <h4>Soft-skills :</h4>
              <p>трудолюбив,напорист(или упрям),честен,обожаю учится,автономен .</p>
            </div>
            <div className='row border-bot'></div>
          </div>
          <div className="col skills">
              <div className="row react-text">
                <h5 className="row title">React</h5>
                <p> Создаю компоненты, в основом, на react-hooks,а состояние при помощи Redux.Фиксю с redux-logger </p>
              </div>
              <div className="col js-text">
                <h5 className="col-4">Java-Script </h5>
                <p> В дж </p>
              </div>

              <div className="col html-css-text">
                <h5 className="row title">HTML and CSS </h5>
                <p>Для стилизации компонентов я использую flex-box,медиа-запросы,   препроцесор SASS (в синтаксисе SCSS).Могу сделать анимацию любой сложности,используя только CSS.Знаком с BEM,Bootstrap,mobile-first,Wordpress.
                </p>
                <div className='row border-bot'></div>
              </div>
              <div className="col">
                <div className="row tools">
                  <h6 className="col-4">Tools :</h6>
                  <p>npm , yarn , CLI , git , git-hub </p>
                </div>
                <div className="row instruments">
                  <h6 className="col-4">Development environment :</h6>
                  <p>create-react-app , webpack</p>
                </div>
                <div className="row instruments">
                  <h6 className="col-4">CSS-preprocessor :</h6>
                  <p> SASS</p>
                </div>
                <div className="row instruments">
                  <h6 className="col-4">State manager :</h6>
                  <p> Redux</p>
                </div>

                <div className="row instruments">
                  <h6 className="col-4">Сode editors :</h6>
                  <p>Visual Studio Code , Sublime Text</p>
                </div>

                <div className='row border-bot'></div>
              </div>
          </div>
          <div className="col next-steps">
                <h4 className="row title">My next steps :</h4>
                <p>
                  <span>&#9744;</span>
                    To study React-native and mobile development.</p>
                <p>
                  <span>&#9744;</span>
                    Deepen knowledge in React , Java-script , CSS and HTML.
                </p>
                <div className='row border-bot'></div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
