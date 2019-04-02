(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{180:function(e,t,i){e.exports=i.p+"assets/img/github.b06a3945.png"},181:function(e,t,i){e.exports=i.p+"assets/img/github-desktop-app.248500aa.png"},182:function(e,t,i){e.exports=i.p+"assets/img/github-add-repo.b7d25881.png"},183:function(e,t,i){e.exports=i.p+"assets/img/github-create-repo.73264a32.png"},184:function(e,t,i){e.exports=i.p+"assets/img/github-clone-repo.72cd3788.png"},185:function(e,t,i){e.exports=i.p+"assets/img/github-open-dialog.ccf4cc07.png"},186:function(e,t,i){e.exports=i.p+"assets/img/github-app-clone-repo.a396f668.png"},187:function(e,t,i){e.exports=i.p+"assets/img/vscode-folder.023ac97e.gif"},188:function(e,t,i){e.exports=i.p+"assets/img/vscode-add-file.dc825c81.gif"},189:function(e,t,i){e.exports=i.p+"assets/img/vscode-add-content.a1c304ab.gif"},190:function(e,t,i){e.exports=i.p+"assets/img/vscode-markdown-preview.274cd3b3.gif"},191:function(e,t,i){e.exports=i.p+"assets/img/github-desktop-commit.1311f242.gif"},192:function(e,t,i){e.exports=i.p+"assets/img/github-desktop-history.2eb6dedd.png"},193:function(e,t,i){e.exports=i.p+"assets/img/github-desktop-push.7d4a2eb3.gif"},194:function(e,t,i){e.exports=i.p+"assets/img/github-view-changes.fe67ba02.png"},206:function(e,t,i){"use strict";i.r(t);var s=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"managing-files-tutorial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#managing-files-tutorial","aria-hidden":"true"}},[this._v("#")]),this._v(" Managing files tutorial")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"version-control-systems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-control-systems","aria-hidden":"true"}},[this._v("#")]),this._v(" Version control systems")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("CVS (Concurrent Version Systems) - 1900's")]),this._v(" "),t("li",[this._v("SVN (Apache Subversion) - 2000's")]),this._v(" "),t("li",[this._v("Git/Mercurial - 2005")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"cvs-svn-centralized-version-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cvs-svn-centralized-version-control","aria-hidden":"true"}},[this._v("#")]),this._v(" CVS & SVN - Centralized Version Control")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"git-mercurial-distributed-version-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-mercurial-distributed-version-control","aria-hidden":"true"}},[this._v("#")]),this._v(" Git, Mercurial - Distributed Version Control")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHub")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Although "),t("code",[this._v("git")]),this._v(" can be used without a central server, it is commonly paired with the collaborative, cloud-based repository service GitHub, which maintains a copy of your files in a central, secure, and backed-up location.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Fast -- add to your team and code base quickly")]),this._v(" "),t("li",[this._v("Distributed")]),this._v(" "),t("li",[this._v("Each commit has a corresponding hash (track changes from everyone)")]),this._v(" "),t("li",[this._v("Everyone has a local copy of the history")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("New versions of your files must be explicitly committed when they are ready. Git doesn't save a new version every time you save a file to disk. That approach works fine for word-processing documents, but not for programming files. You typically need to write some code, save it, load it in your browser, test it, debug, make some fixes, and test again before you're ready to commit a new version.")]),this._v(" "),t("li",[this._v("For text files (which nearly all your web development files will be), git pays attention to changes at the line level, and not just the file level. That means it can automatically merge together different changes made to different parts of the same file.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"git-core-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-core-concepts","aria-hidden":"true"}},[this._v("#")]),this._v(" Git Core Concepts")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("strong",[e._v("repository (repo)")]),e._v(": an archive containing all the committed versions of all your files, along with some additional metadata, stored in a hidden subdirectory named "),i("code",[e._v(".git")]),e._v(' within your project directory. If you want to sound cool and in-the-know, call this a "repo."')]),e._v(" "),i("li",[i("strong",[e._v("commit")]),e._v(": a set of file versions that have been added to the repository, along with the name of the person who did the commit, a message describing the commit, and a timestamp. This extra tracking information allows you to see when, why, and by whom changes were made to a given file.")]),e._v(" "),i("li",[i("strong",[e._v("remote")]),e._v(": a link to a copy of this same repository on a different machine. Typically this will be a central version of the repository that all local copies on your various development machines point to (known as the "),i("code",[e._v("origin")]),e._v("). You can push/publish commits to, and pull commits from, a remote repository to keep everything in sync. You can also add more than one remote link if you are working with multiple remote repositories.")]),e._v(" "),i("li",[i("strong",[e._v("merge conflict")]),e._v(": a condition that occurs when you merge commits pulled from a remote repository that include changes to the same lines that you've already changed locally. In this case, git doesn't which version is correct, so you must resolve the conflict by choosing a winner, or manually combining the changes.")]),e._v(" "),i("li",[i("strong",[e._v(".gitignore file")]),e._v(": a file in your project's root directory that contains paths or specific files that git should ignore. This is very useful for keeping things out of the repository that should never be in there, such as current workspace settings saved by an Integrated Development Environment (IDE), or files containing login information or secret keys.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(180),alt:"Outline of GIT workflow"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"github-desktop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-desktop","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHub Desktop")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Git can be used as a command line tool (see "),t("a",{attrs:{href:"./getting-setup"}},[this._v("Getting setup page")]),this._v("). In this course we will be using the GitHub Desktop application to manage our repositories, files and commits.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(181),alt:"Github desktop screenshot"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"working-with-repositories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#working-with-repositories","aria-hidden":"true"}},[this._v("#")]),this._v(" Working with repositories")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"create-a-new-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" Create a new repository")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(182),alt:"Screenshot of add repository button"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(183),alt:"Screenshot of repository details screen"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"clone-an-existing-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-an-existing-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" Clone an existing repository")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(184),alt:"Screenshot of cloning a repository on GitHub"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(185),alt:"Screenshot of dialog to open GitHub Desktop"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Once in the application, it will ask you where to store the files on your computer. I recommend creating a folder at "),t("code",[this._v("/Users/{username}/Sites/imt-549/")]),this._v(" to store all your repositories for this course.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(186),alt:"Screenshot of clone repository dialog in GitHub app"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"if-the-open-in-github-desktop-button-doesn-t-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-the-open-in-github-desktop-button-doesn-t-work","aria-hidden":"true"}},[this._v("#")]),this._v(' If the "Open in GitHub Desktop" button doesn\'t work')])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"open-in-vs-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-in-vs-code","aria-hidden":"true"}},[this._v("#")]),this._v(" Open in VS Code")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Note: If you see a "),t("code",[this._v(".git")]),this._v(" folder in the repo, that folder contains the meta data for the repository, not your actual files.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(187),alt:"Animation of opening a folder Visual Studio Code"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Choose the folder you cloned, "),t("code",[this._v("/Users/{username}/Sites/imt-529/{repo-name}")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"create-a-gitignore-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-gitignore-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Create a .gitignore file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Now let's add some files to our project, the first is a special file, "),t("code",[this._v(".gitignore")]),this._v(". This file is formatted in plain text with a filename or folder path on each line. The first item we are going to add is "),t("code",[this._v(".DS_Store")]),this._v(", a file that Mac OS adds to every folder to keep track of settings and options.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Another file you will commonly see in the "),t("code",[this._v(".gitignore")]),this._v(" file is "),t("code",[this._v("node_modules")]),this._v(", late in the course we will get into installing code from npm, a repository of open source tools that can be used on any project. We would ignore duplicating those files and pushing them into our repository.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(188),alt:"Animation of adding a file in VS Code"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"edit-the-readme-md-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edit-the-readme-md-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Edit the README.md file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(189),alt:"Adding content to the README file"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This special "),t("code",[this._v("README.md")]),this._v(" file in the root of the project is automatically displayed to users in GitHub as they are browsing your code.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In addition, this file is where developers can document various things about a project or code. The best "),t("code",[this._v("README.md")]),this._v(" files have a consistent format, an example: templates.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"preview-the-rendered-markdown-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preview-the-rendered-markdown-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Preview the rendered markdown file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(190),alt:"Animation of markdown preview"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"commit-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit-changes","aria-hidden":"true"}},[this._v("#")]),this._v(" Commit changes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(191),alt:"Animation of how to commit with GitHub Desktop"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"viewing-the-commit-history"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#viewing-the-commit-history","aria-hidden":"true"}},[this._v("#")]),this._v(" Viewing the commit history")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(192),alt:"Screenshot of GitHub Desktop history"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"push-to-origin-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push-to-origin-github","aria-hidden":"true"}},[this._v("#")]),this._v(" Push to origin (Github)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(193),alt:"Animation of how to push code with GitHub Desktop"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"view-changes-on-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-changes-on-github","aria-hidden":"true"}},[this._v("#")]),this._v(" View changes on Github")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(194),alt:"Screenshot of a repository on GitHub"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"repeat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repeat","aria-hidden":"true"}},[this._v("#")]),this._v(" Repeat")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"additional-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#additional-resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Additional resources")])}],o=i(0),r=Object(o.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("iframe",{attrs:{width:"725",height:"408",src:"https://www.youtube.com/embed/q3e4eYHpO-k",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),i("p",[e._v("Website consist of many files, folders and assets. These files are living documents that change over time.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("One central server, each client (person) checks out and merges changes to main server.")]),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("Each client (person) has a local repository (sometimes shortened to 'repo'), which they can then reconcile with the main server.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("Git is an archiving system that can store, retrieve, and merge various versions of your files. It's kind of like Dropbox and Google Docs, but with two big differences:")]),e._v(" "),e._m(8),e._v(" "),i("p",[e._v("Like Dropbox and Google Docs, git can show you all previous versions of a file and can quickly rollback to one of those previous versions. This is often helpful in web development, especially if you embark on making a massive set of changes, only to discover part way through that those changes were a bad idea (I speak from experience here 😱).")]),e._v(" "),i("p",[e._v("But where git really comes in handy is in team development. Almost all professional web development work is done in teams, with involves multiple people working on the same set of files at the same time. Git helps the team coordinate all these changes, and provides a record so that anyone can see how a given file ended up the way it did.")]),e._v(" "),e._m(9),e._v(" "),i("p",[e._v("To understand how git works, you need to understand its core concepts. Read this section carefully, and come back to it if you forget what these terms mean.")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),i("p",[e._v('Sign in to your GitHub account and click the "+" button in the header to create a new repository.')]),e._v(" "),e._m(17),e._v(" "),i("p",[e._v("Fill out the information about the repository. For the name, it is a best practice to use only two to three words, all lowercase and dashes to separate words.")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),i("p",[e._v('Now that the repository is created, it is time to get it connected to a folder on your computer. This process is called cloning. Click the "Clone or download" button and choose the "Open in Desktop" link. This will pop open a dialog to ask for permissions to open in the desktop application.')]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),i("p",[e._v("On some computers, the \"Open in GitHub Desktop\" button doesn't work from the browser. You can clone a repository from the GitHub Desktop application itself. I've included a video to demonstrate the process.")]),e._v(" "),e._m(25),e._v(" "),i("p",[e._v("Once the code has been downloaded to your computer, it is time to open VSCode and open that folder.")]),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),i("p",[e._v("You will notice VSCode does have the ability to work with the repository to see differences, commit code and push it to GitHub, like the GitHub Desktop app. We will be using the GitHub Desktop app moving forward in this course, because it is a dedicated app that is clear what is going on with the repo.")]),e._v(" "),i("p",[e._v("There are many applications that work with GIT repositories, individuals and companies standardize on an application that makes them most productive.")]),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),i("p",[e._v("Since this file is personal to your computer and doesn't have any value living with the code of a website, we will ignore it to ensure it does not get committed and pushed to GitHub.")]),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),i("p",[e._v("GitHub and other code storage websites use a filetype called Markdown. It is a way to express document formatting with regular characters and when viewed on these websites, the file is converted to HTML to view with formatting.")]),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),i("p",[e._v('There is a button in the top-right of VSCode when editing a markdown file to "preview" the rendered HTML of the file. This is helpful to ensure your expected formatting is rendered correctly in HTML.')]),e._v(" "),e._m(38),e._v(" "),i("p",[e._v("Note that VSCode graphically shows a gutter bar next to the lines that have been added. It uses git to determine which lines have changed within the current file. Lines that were removed, show a small wedge to indicate where lines were previously.")]),e._v(" "),e._m(39),e._v(" "),i("p",[e._v("Once the changes have been made, it is time to commit the changes to make a 'save point' with a comment about what has changed.")]),e._v(" "),i("p",[e._v('All files changed will show in the "Changes" area. Select the files that you want to be saved, you don\'t have to choose every file, but most of the time you will.')]),e._v(" "),i("p",[e._v('Writing a good commit message is an art, being concise while still explaining what changed and why is important. The Summary, the first line, should complete this sentence: "if applied, this commit will Add instructions to the README." The emphasized words in this sentence will make an appropriate commit message.')]),e._v(" "),i("p",[e._v("The Description is a larger area to explain in more detail why the change was needed, any side effects the code will produce and link to any issues it resolves or where the change was requested. This description area should be formatted in Markdown.")]),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),i("p",[e._v("The list of changes should disappear and a message should be shown indicating that the commit was completed. Note that you click the Undo button to undo that commit if you decided it was a bad idea.")]),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),i("p",[e._v("After making one or more commits is it good practice to push the changes to the central GIT repository (In our case, GitHub). This will publish all the changes so other developers can pull them down and work off the updated code.")]),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),i("p",[e._v("Now that the changes have been pushed, visiting the repository on GitHub should show all the changes made.")]),e._v(" "),e._m(46),e._v(" "),e._m(47),e._v(" "),i("p",[e._v('This process can seem a bit straining at first, especially when coming from the process in desktop application or Google Web apps, where changes are saved in real time or without comments. After going through this course you will have an understanding of why this process is important. Thinking of changes to a codebase as "snapshots" in time allows you as a developer to isolate a bundle of changes (HTML, CSS, Images, etc) around a description and moving between each state in the code changes all the necessary files at once.')]),e._v(" "),e._m(48),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://help.github.com/en/desktop/contributing-to-projects",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Desktop how-to guides"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://guides.github.com/activities/hello-world/",target:"_blank",rel:"noopener noreferrer"}},[e._v('GitHub "Hello world" activity'),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://chris.beams.io/posts/git-commit/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Write a Git Commit Message"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://code.visualstudio.com/docs/getstarted/introvideos",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode intro videos"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://guides.github.com/features/mastering-markdown/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown guide"),i("OutboundLink")],1)])])])},s,!1,null,null,null);t.default=r.exports}}]);