DecideByDecisionTree helps you in developing Decision Trees, which helps users in finding what they want by decision tree.

This is an alternative to http://www.ZingTree.com or http://www.yonyx.com.

Here is an example of a website that uses DecideByDecisionTree
http://simpledecisions.us/

**How to Set it up:**

**Install Node:** 
Follow the link & install Nodejs.
https://nodejs.org/en/download/

**Install Bower:**
Bower is the packaging manager.
npm install -g bower

**Download the code from GitHub:**
Do a git checkout from the url 
https://github.com/rvishnu/DecideByDecisionTree.git

**Mongodb Database Setup:**
The easiest way to setup the database is by getting an account in any of the cloud mongodb providers. We use www.mlab.com
Create an account and create a database and then you can give the address, username & password in the configuration file  located in config\env folder.

**Build and Run:**
Go to the downloaded source folder.
Then give
npm install
bower install

After this you can start the server by node server.js from command prompt.

**View the Application:**

After that you can view the application by 

Home Page: http://localhost:3000

Sign up an user account

Ideas Page, where the users can input their ideas that comes into mind. http://localhost:3000/ideas

Articles Page, where the users can write the articles. It is like a blog posting page http://localhost:3000/articles

**Setting up a decision tree:**

Setting up a decision tree involves creating a root node. You can connect to the mlab and create your root node.

**Setting up the Root Node:**
Create a collection NodeModels and add the following root node
{    "_id": {        "$oid": "55a08a699f6f3594a84d324d"
    },
    "path": "FirstNode",
    "name": "RootNode",
    "childQuestion": "Root Node",
    "__v": 0
}
This will create the root node in the database.
Now you can go to the URL
http://localhost:3000/tree/ FirstNode
From there you can add your Child Nodes as you wish. You can create any number of decision trees.

For viewing the tree you can use
http://localhost:3000/decide/ FirstNode

**Restful API Access:**
You can also develop any front end as the Tree structure has restful api access. You can access the api’s by
http://localhost:3000/api/tree/FirstNode

This project is build on top of Mean.io. So for more information look at http://mean.io

**Coming Up:**

Ionic Front End of the application
Deployment of the application in S3 and EC2 with Ansible & Docker
Integration Test Cases

**Applications Built using DecideByDecisionTree:**
www.simpledecisions.us

