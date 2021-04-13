import React, { Component } from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import Newsletter from "../components/Newsletter/Newsletter";
import config from "../../data/SiteConfig";

class NewsletterPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Join the Newsletter for more ${config.siteTitle}`} />
            <article className="griddled wrap p-6 lg:p-12 bg-white">
              <aside className="sidebar">
                <div className="sticky top-0 mb-6 md:pt-12">
                  <Newsletter />
                </div>
              </aside>
              <div className="primary lg:pr-6">
                <h1 className="page-title mb-6">
                  Join our (Virtual) Newsletter 😉
                </h1>
                <section className="prose">
                  <p className="text-lg lg:text-xl">
                    Virtual facilitation is a new challenge for a lot of us. To help you meet it head on, we developed this resource. <strong>If you want to be notified when new activities are added, join the newsletter be in the know as soon as they go live!</strong>
                  </p>
                  <p>
                    We'll not only be posting new activities but also mini-agendas for a sequence of activities you can facilitate. If you sign up for the newsletter, you'll automatically get <a href="https://www.facilitator.cards/blog">our blog</a> in your inbox any week we post new content.                  </p>
                  <p>
                    "A stack" is our shorthand for a sequence of cards, or a seamless flow of processes. Each stack we share here will give you ideas for virtually facilitating a group from <Link to={`/for/emotion`}>emotion</Link> to <Link to={`/for/ideation`}>ideation</Link> to <Link to={`/for/clarification`}>clarification</Link> to <Link to={`/for/execution`}>execution</Link>. We'll include the step-by-steps of each activity, as well as pointers for transitioning through the stack.
                  </p>
                  <p>
                    If that all sounds like it's right up your alley, we'll see you in the newsletter. Oh! And don't forget: You can always reply directly to our emails to get ahold of us. We'd especially love to hear back if you're testing or tweaking the activities we publish.
                  </p>
                  <p>
                    Let's figure this out virtually together,<br/><br/>
                  </p>
                </section>
                
              </div>
            </article>
        </div>
      </Layout>
    );
  }
}

export default NewsletterPage;
