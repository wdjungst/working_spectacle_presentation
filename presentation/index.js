// Import React
import React from "react";
import TodoList from "./TodoList";
// https://jsfiddle.net/69z2wepo/45085/
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  reactLogo: require("../assets/reactjs-logo.png"),
  railsLogo: require("../assets/rails.png"),
  webpackLogo: require("../assets/webpack.png"),
  webpackGraphic: require("../assets/webpack_graphic.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#039BE5",
  secondary: "#607D8B"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="#333">
            <Layout style={{}}>
              <Fill>
                <Heading style={{ marginRight: "55px" }} size={1} caps lineHeight={1} textColor="#FFF">Webpack / Rails / React</Heading>
                <Text textSize="1.2em" textAlign="center" textColor="#FFF" margin="80px 0px 0px" bold>Dave Jungst</Text>
                <Text textSize="1.2em" textAlign="center" textColor="#FFF" margin="10px 0px 0px" bold>DevPoint Labs</Text>
              </Fill>
              <Fill>
                <Image src={images.reactLogo.replace("/", "")} margin="0px auto" height="220px"/>
                <Image src={images.railsLogo.replace("/", "")} margin="0px auto" height="220px"/>
                <Image src={images.webpackLogo.replace("/", "")} margin="0px auto" height="293px"/>
              </Fill>
            </Layout>
          </Slide>


          <Slide transition={["slide"]} bgColor="#333">
            <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="#FFF">Asset Pipeline: Cons</Heading>
              <Layout>
                <Fill>
                  <List>
                    <Appear><ListItem textColor="primary">All assets delivered at once</ListItem></Appear>
                    <Appear><ListItem textColor="primary">Lost / Duplicate CSS</ListItem></Appear>
                    <Appear><ListItem textColor="primary">Dependencies in head vs code</ListItem></Appear>
                    <Appear><ListItem textColor="primary">Non Modular Approach</ListItem></Appear>
                    <Appear><ListItem textColor="primary">Difficulty building seperate client</ListItem></Appear>
                  </List>
                </Fill>
              </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#333" textColor="primary">
            <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">Webpack</Heading>
            <BlockQuote>
              <Quote textColor="#fff">Webpack takes a different approach than the asset pipeline.  It is a module bundler.</Quote>
            </BlockQuote>
            <Layout>
              <Appear>
                <Image src={images.webpackGraphic.replace("/", "")} margin="0px auto auto" height="220px"/>
              </Appear>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#333" textColor="primary">
            <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">Webpack Pros / Cons</Heading>
            <Layout>
              <Fill>
                <Text textColor="primary">Pros:</Text>
                  <List>
                    <Appear><ListItem>Code Splitting</ListItem></Appear>
                    <Appear><ListItem>CLI</ListItem></Appear>
                    <Appear><ListItem>Dev Server</ListItem></Appear>
                    <Appear><ListItem>ES6 Module Support</ListItem></Appear>
                    <Appear><ListItem>Supports CommonJS (NPM packages)</ListItem></Appear>
                    <Appear><ListItem>Manages Assets</ListItem></Appear>
                    <Appear><ListItem>Plugin Support</ListItem></Appear>
                    <Appear><ListItem>Shared client / server modules</ListItem></Appear>
                  </List>
              </Fill>
              <Fill>
                <Appear><Text textColor="primary">Cons:</Text></Appear>
                  <List>
                    <Appear><ListItem>Complicated Setup</ListItem></Appear>
                    <Appear><ListItem>Confusing Configuration</ListItem></Appear>
                    <Appear><ListItem>Learning Curve</ListItem></Appear>
                  </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#333" textColor="primary">
            <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">Webpack quick tutorial</Heading>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Code textColor="#7CFC00">$ npm install webpack -g</Code></Appear>
              </Fill>
            </Layout>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Code textColor="#7CFC00">$ npm install css-loader</Code></Appear>
              </Fill>
            </Layout>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Code textColor="#7CFC00">$ npm install style-loader</Code></Appear>
              </Fill>
            </Layout>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Code textColor="#7CFC00">$ touch index.html entry.js style.css</Code></Appear>
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="html"
            textSize=".6em"
            code={require("raw!../assets/wp/index.html")}
            ranges={[
              { loc: [0,8], note: "entry.js", title: "Preparing for Webpack" },
              { loc: [5,6], note: "entry.js", title: "Notice we the src bundle.js" }
          ]} />
          <CodeSlide
            transition={["fade"]}
            lang="js"
            textSize=".63em"
            code={require("raw!../assets/wp/entry.js")}
            ranges={[
              { loc: [0, 3], note: "entry.js" },
              { loc: [0, 3], note: "$ webpack ./entry.js bundle.js" }
          ]} />

          <CodeSlide
            transition={["fade"]}
            lang="css"
            textSize=".6em"
            code={require("raw!../assets/wp/wp_style")}
            ranges={[
              { loc: [0, 90], note: "style.css" }
          ]} />

          <CodeSlide
            transition={["fade"]}
            lang="js"
            textSize=".63em"
            code={require("raw!../assets/wp/entry2.js")}
            ranges={[
              { loc: [0, 5], note: "entry.js" },
              { loc: [2,3], title: "Import style" },
              { loc: [0, 4], note: "$ webpack ./entry.js bundle.js --module-bind 'css=style!css'" }
          ]} />

          <CodeSlide
            transition={["fade"]}
            lang="js"
            textSize=".63em"
            code={require("raw!../assets/wp/webpack.config.js")}
            ranges={[
              { loc: [0, 12], note: "webpack.config.js" },
              { loc: [3, 4], title: "Entry point for the app" },
              { loc: [4, 8], title: "Where to build" },
              { loc: [8, 11], title: "Pass all css through the style loader" },
              { loc: [0, 0], note: "$ webpack" }
          ]} />

          <Slide transition={["fade"]} bgColor="#333" textColor="primary">
            <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">React On Rails</Heading>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Text textColor="primary">react-rails gem</Text>
                <List>
                  <Appear><ListItem>Tied to asset pipeline</ListItem></Appear>
                  <Appear><ListItem>Additional libraries confined to gems</ListItem></Appear>
                  <Appear><ListItem>Routing can get weird</ListItem></Appear>
                </List>
              </Fill>
              <Fill>
                <Text textColor="primary">Seperate Client App</Text>
                <List>
                  <Appear><ListItem>2 Codebases to maintain</ListItem></Appear>
                  <Appear><ListItem>Double the hosting</ListItem></Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#333" textColor="primary">
            <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">App Shopping List</Heading>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <List>
                  <Appear><ListItem>Webpack along side sprockets</ListItem></Appear>
                  <Appear><ListItem>Full React app living in same codebase</ListItem></Appear>
                  <Appear><ListItem>Layout capabilities for shared assets</ListItem></Appear>
                  <Appear><ListItem>Layout ommission for mult entry points</ListItem></Appear>
                </List>
                <Appear><Text textColor="#fff">Many approaches were close but none filled all of my needs</Text></Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#333" textColor="primary">
            <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">webpack-rails-react</Heading>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <List>
                  <Appear><ListItem>Forked from webpack-rails</ListItem></Appear>
                  <Appear><ListItem>Modified to solve problems and be dynamic</ListItem></Appear>
                  <Appear><ListItem>react-router built in</ListItem></Appear>
                  <Appear><ListItem>Redux built in</ListItem></Appear>
                </List>
                <Appear><Code textColor="#7CFC00" textSize="30px">$ rails new shopping_list --skip-turbolinks</Code></Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["spin"]} bgColor="#f1f1f1">
            <Heading size={4} textAlign="left" caps textColor="primary" textFont="primary">Gemfile</Heading>
            <CodePane textSize="20px" lang="ruby" source={require("raw!../assets/shopping_list/Gemfile.example")}>
            </CodePane>
          </Slide>

          <Slide transition={["fade"]} bgColor="#333">
            <Heading size={4} textAlign="left" caps textColor="primary" textFont="primary">Install</Heading>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Code textColor="#7cfC00" textSize="30">$ bundle</Code></Appear>
              </Fill>
            </Layout>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Code textColor="#7cfC00" textSize="30">$ rails g webpack_rails_react:install</Code></Appear>
              </Fill>
            </Layout>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Code textColor="#7cfC00" textSize="30">$ npm install && bundle install</Code></Appear>
              </Fill>
            </Layout>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Text textColor="#fff">Pass --router for react-router</Text></Appear>
              </Fill>
            </Layout>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Text textColor="#fff">Pass --redux for redux</Text></Appear>
              </Fill>
            </Layout>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Text textColor="#fff">Options can be combined</Text></Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgColor="#333">
            <Heading size={4} textAlign="left" caps textColor="primary" textFont="primary">Build Rails Backend</Heading>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Code textColor="#7cfC00" textSize="24">$ rails g controller Home index --no-helper --no-assets</Code></Appear>
              </Fill>
            </Layout>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Code textColor="#7cfC00" textSize="30">$ rails g model Item name complete:boolean</Code></Appear>
              </Fill>
            </Layout>
            <Layout style={{ marginTop: "50px" }}>
              <Fill>
                <Appear><Code textColor="#7cfC00" textSize="24">$ rails g controller api/items --no-helper --no-assets</Code></Appear>
              </Fill>
            </Layout>
          </Slide>


          <Slide transition={["spin"]} bgColor="#f1f1f1">
            <Heading size={4} textAlign="left" caps textColor="primary" textFont="primary">Items Conroller</Heading>
            <CodePane lang="ruby" source={require("raw!../assets/shopping_list/items_controller.ruby")}>
            </CodePane>
          </Slide>

          <Slide transition={["spin"]} bgColor="#f1f1f1">
            <Heading size={4} textAlign="left" caps textColor="primary" textFont="primary">config/routes.rb</Heading>
            <CodePane textSize="30" lang="ruby" source={require("raw!../assets/shopping_list/routes.rb")}>
            </CodePane>
          </Slide>

          <Slide transition={["spin"]} bgColor="#f1f1f1">
            <Heading size={4} textAlign="left" caps textColor="primary" textFont="primary">home/index.html.erb</Heading>
            <CodePane textSize="30" lang="html" source={require("raw!../assets/shopping_list/index.html")}>
            </CodePane>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="html"
            textSize=".6em"
            code={require("raw!../assets/shopping_list/application.html.erb")}
            ranges={[
              { loc: [0,17], note: "application.html.erb" },
              { loc: [7,8], title: "Hot loading" },
              { loc: [13,14], title: "Webpack assets" },
          ]} />

          <CodeSlide
            transition={["fade"]}
            lang="html"
            textSize=".6em"
            code={require("raw!../assets/shopping_list/application.html.erb")}
            ranges={[
              { loc: [0,16], title: "Alternate Setup" },
              { loc: [4,7], title: "Each view is created without a layout" },
              { loc: [13,14], title: "Webpack assets with proper entry added to each view" }
          ]} />

          <CodeSlide
            transition={["fade"]}
            lang="js"
            textSize=".6em"
            code={require("raw!../assets/shopping_list/webpack.config.js")}
            ranges={[
              { loc: [0,16], note: "config/webpack.config.js" },
              { loc: [5,6], title: "Production plugin" },
              { loc: [36,45], title: "Loaders for ES6 and React CAUTION: Stage-0" },
              { loc: [58,75], title: "Production Ready" }
          ]} />

          <Slide transition={["spin"]} bgColor="#f1f1f1">
            <Heading size={4} textAlign="left" caps textColor="primary" textFont="primary">webpack/application.js</Heading>
            <CodePane textSize="30" lang="js" source={require("raw!../assets/shopping_list/application.example")}>
            </CodePane>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            textSize=".6em"
            code={require("raw!../assets/shopping_list/App.example")}
            ranges={[
              { loc: [0,3], note: "webpack/containers/App.js" },
              { loc: [5,9], title: "Set items to be an empty array" },
              { loc: [10, 19], title: "Get items before component is mounted" },
              { loc: [71, 83], title: "Render AddItem and ItemList" },
              { loc: [20, 36], title: "updateList passed down as prop" },
              { loc: [37, 53], title: "updateItem passed down as prop" },
              { loc: [55, 70], title: "deleteItem passed down as prop" }
          ]} />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            textSize=".6em"
            code={require("raw!../assets/shopping_list/AddItem.example")}
            ranges={[
              { loc: [0,24], note: "webpack/components/AddItem.js" },
              { loc: [10,24], title: "Render the form" },
              { loc: [3, 9], title: "Submit the form" }
          ]} />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            textSize=".5em"
            code={require("raw!../assets/shopping_list/ItemList.example")}
            ranges={[
              { loc: [0,18], note: "webpack/components/ItemList.js" },
              { loc: [3,4], title: "Define props" },
              { loc: [4,7], title: "Create Item from props" },
              { loc: [8,13], title: "Render Items" },
          ]} />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            textSize=".5em"
            code={require("raw!../assets/shopping_list/Item.example")}
            ranges={[
              { loc: [0,20], note: "webpack/components/ItemList.js" },
              { loc: [2,3], title: "Define props" },
              { loc: [4,17], title: "Render the item" }
          ]} />

        </Deck>
      </Spectacle>
    );
  }
}
