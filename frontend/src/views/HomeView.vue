<script setup></script>

<template>
  <main class="home">
    <section class="home-section">
      <h1 class="home-section-h1">What kind of application is this?</h1>
      <figure class="home-section-figure">
        <img class="home-section-figure-img" src="" alt="application">
        <figcaption class="home-section-figure-figcaption">
          <p class="home-section-figure-figcaption-p">This is an example of an application.</p>
        </figcaption>
      </figure>
    </section>
    <section class="home-section-functionality">
      <h1 class="home-section-functionality-h1">Functionality of the application and the saving time.</h1>
      <figure class="home-section-functionality-figure">
        <img class="home-section-functionality-figure-img" src="" alt="functionality">
        <figcaption class="home-section-functionality-figure-figcaption">
          <p class="home-section-functionality-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum soluta aliquid, quam veniam modi est animi, fuga itaque quo beatae molestias vitae quis minus architecto corrupti dignissimos provident, quidem incidunt quaerat labore aspernatur ad? Vero cupiditate veniam tempore incidunt eum beatae commodi maxime pariatur veritatis in rerum aliquid voluptate totam sequi recusandae id eligendi corrupti earum aliquam, praesentium enim repellat quo temporibus nobis? Laborum qui voluptatum voluptates culpa iste necessitatibus, expedita est rem suscipit magnam atque quam, modi vero. Vel dicta quod nulla, suscipit saepe cupiditate obcaecati quia ea culpa at est facilis neque ullam itaque voluptatem expedita, quae consequatur necessitatibus dolore alias ipsa quasi. Praesentium, eveniet expedita, corporis autem officia illo aliquam consequatur ea culpa, blanditiis aperiam? Voluptatem incidunt velit tempore numquam quam, tempora at consequuntur sunt dicta. Reiciendis corporis perspiciatis incidunt ut officiis tempora at nisi asperiores repellat magni totam iusto eligendi distinctio doloribus, pariatur laudantium quibusdam! Odio quasi ipsum, qui ducimus esse assumenda placeat laborum provident repudiandae ea adipisci eveniet cum suscipit perferendis quia numquam fugiat vero laboriosam recusandae sequi voluptatum. Quod explicabo, perspiciatis illo corrupti exercitationem sunt a, aliquam facilis aut, magni enim saepe at inventore recusandae minus! Saepe nobis autem totam quis quibusdam. Earum blanditiis placeat ipsa consectetur in rem eligendi repellendus vel omnis accusamus facere, autem perferendis fugit labore recusandae dolorum nisi, fugiat quisquam suscipit? Quia, labore doloribus laudantium ut autem, quisquam quis blanditiis impedit necessitatibus exercitationem mollitia ex nesciunt corrupti ea vitae placeat natus, adipisci sapiente nisi. Dicta temporibus ipsum nemo cupiditate cumque. Incidunt amet nemo rerum ea, suscipit accusantium tempora eius repellat sit aliquam recusandae, cum quod maxime eveniet consequuntur eligendi fugit ipsa itaque animi unde omnis! Quasi voluptatibus facere beatae fugiat. Quidem autem provident ut eveniet aspernatur blanditiis sequi animi ab distinctio nemo nulla accusantium nihil minus, dignissimos iure tempora nesciunt soluta atque, laudantium dolores. Exercitationem est accusamus deleniti doloremque autem. Excepturi pariatur distinctio eum molestiae ex molestias maiores, tempore dicta numquam aliquid cum similique nam voluptatem dolor ducimus at expedita? Ad reiciendis aspernatur similique laudantium odit animi vel placeat. Mollitia libero dicta nulla placeat porro repellendus dignissimos sint delectus sunt voluptas, iure iste, suscipit molestiae amet perferendis facilis itaque iusto velit earum reiciendis ex! Facilis amet odio, beatae minus voluptates suscipit dignissimos repudiandae magnam iusto consectetur illo debitis nihil reiciendis eius vel eaque non accusamus et ad velit quaerat id saepe qui placeat. Eius, officiis alias tenetur dolor et qui voluptate! Similique blanditiis unde iure distinctio maxime vel nobis illum iste magnam! Ex veniam officia veritatis minima dolor quas maiores adipisci animi, modi numquam? Adipisci obcaecati veritatis perspiciatis neque odio facilis dolores consequatur recusandae, blanditiis sed suscipit odit voluptatem optio culpa, quos alias est natus quibusdam? Ratione incidunt quisquam rem?
          </p>
        </figcaption>
      </figure>
    </section>
    <section class="home-section-last-users">
      <h1 class="home-section-last-users-h1">Latest Users</h1>
      <ul class="home-section-last-users-ul">
        <li class="home-section-last-users-ul-li">
          <p class="home-section-last-users-ul-li-p">User 1</p>
        </li>
        <li class="home-section-last-users-ul-li">
          <p class="home-section-last-users-ul-li-p">User 2</p>
        </li>
        <li class="home-section-last-users-ul-li">
          <p class="home-section-last-users-ul-li-p">User 3</p>
        </li>
        <li class="home-section-last-users-ul-li">
          <p class="home-section-last-users-ul-li-p">User 4</p>
        </li>
        <li class="home-section-last-users-ul-li">
          <p class="home-section-last-users-ul-li-p">User 5</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
}

.home-section {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.home-section-h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.home-section-figure {
  margin: 0;
}

.home-section-figure-img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.home-section-figure-figcaption {
  text-align: center;
  margin-top: 1rem;
}

.home-section-functionality {
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.home-section-functionality-h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.home-section-functionality-figure {
  margin: 0;
}

.home-section-functionality-figure-img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.home-section-functionality-figure-figcaption {
  text-align: center;
  margin-top: 1rem;
}

.home-section-last-users {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.home-section-last-users-h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.home-section-last-users-ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.home-section-last-users-ul-li {
  background: #ffffff;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.home-section-last-users-ul-li-p {
  margin: 0;
}
</style>
