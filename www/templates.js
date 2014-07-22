angular.module('templates-app', ['about/index.tpl.html', 'header/index.tpl.html', 'home/index.tpl.html', 'messages/index.tpl.html', 'todos/index.tpl.html', 'users/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<h1>About sailngMongo</h1>\n" +
    "\n" +
    "<p>Parking Prototyp that uses the latest Sails.js and Angular to easily create realtime, single page web applications.</p>\n" +
    "<!--<p>It borrows ideas from <a href=\"https://github.com/ngbp/ngbp\">ngbp</a> and <a href=\"https://github.com/angular-app/angular-app/\">angular-app</a>.</p>-->");
}]);

angular.module("header/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header/index.tpl.html",
    "<div ng-controller=\"HeaderCtrl\">\n" +
    "    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n" +
    "                    data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span><span\n" +
    "                    class=\"icon-bar\"></span><span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"/\">SailngMongoDB Seed Project: </a>\n" +
    "            <!-- {{currentUser.role}}-->\n" +
    "         </div>\n" +
    "         <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ng-repeat=\"navItem in navItems\">\n" +
    "                    <a ng-hide=\"!currentUser\" href=\"{{navItem.url}}\"><i class=\"{{navItem.cssClass}}\"></i>&nbsp; {{navItem.title}}</a>\n" +
    "                </li>\n" +
    "                <!-- only admin can view -->\n" +
    "                <li ng-hide=\"currentUser.role!=4\" ><a href=\"/users\"><span class=\"fa fa-group fa-lg\"></span>Admin Users</a></li>\n" +
    "            </ul>\n" +
    "\n" +
    "\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li ><a href=\"/about\"><span class=\"fa fa-question\"></span> About</a></li>\n" +
    "                <li ng-hide=\"currentUser\" ><a href=\"/login\"><span class=\"fa fa-sign-in fa-lg\"></span> Sign in</a></li>\n" +
    "                <li ng-hide=\"currentUser\"><a href=\"/register\"><span class=\"fa fa-pencil fa-lg\"></span> Register</a></li>\n" +
    "                <li ng-if=\"currentUser\" class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                    {{ __('Hello') }}\n" +
    "                    <span class=\"fa fa-user\"></span> {{currentUser.first_name}} <b class=\"caret\"></b></a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li><a href=\"#\"><span class=\"fa fa-user\"></span> Profile</a></li>\n" +
    "                        <li><a href=\"#\"><span class=\"fa fa-cogs\"></span> Settings</a></li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li><a href=\"/logout\"><span class=\"fa fa-sign-out\"></span> Logout</a></li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <!-- /.navbar-collapse -->\n" +
    "    </nav>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "    <h1>The MEAN<span style=\"color:#149c82\">S</span> Stack\n" +
    "        <small> Seed Project</small>\n" +
    "    </h1>\n" +
    "    <p class=\"lead\">MongoDB +ExpressJS + AngularJS + NodeJS + SailsJS = The Means Stack</p>\n" +
    "\n" +
    "    <p>Heard of The MEAN Stack? Well, we thought you'd enjoy The MEANS Stack, all your favorite frameworks + our\n" +
    "        favorite SailsJS!  <br><br>Use this as a starter for your next MEANS project.  Have a suggestion or issue?  Submit it via Github. </p>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-4 col-lg-4 col-lg-offset-2\">\n" +
    "            <p><a class=\"btn btn-info btn-lg\"><i class=\"fa fa-book fa-2x\"></i> Documentation</a></p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4  col-lg-4 col-lg-offset-2\">\n" +
    "            <p><a class=\"btn btn-success btn-lg\"><i class=\"fa fa-github fa-2x\"></i> Clone on Github</a></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-lg-2\">\n" +
    "    <h2><img src=\"../../images/logos/mongodb.png\" alt=\"MongoDB\" height=\"45\"></h2>\n" +
    "    <p>MongoDB is the leading NoSQL database, empowering businesses to be more agile and scalable.</p>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"col-lg-3\">\n" +
    "    <h2> <img src=\"/images/logos/express.png\" alt=\"Express\" height=\"45\"></h2>\n" +
    "    <p>Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.</p>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"col-lg-2\">\n" +
    "    <h2>  <img src=\"../../images/logos/angularjs.png\" alt=\"AngularJS\" height=\"45\"></h2>\n" +
    "    <p>AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</p>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"col-lg-3\">\n" +
    "    <h2><img src=\"../../images/logos/nodejs.png\" alt=\"Node.js\" height=\"45\"></h2>\n" +
    "    <p>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.</p>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"col-lg-2\">\n" +
    "    <h2><img src=\"../../images/logos/sails-logo.png\" alt=\"Sails.js\" height=\"45\"></h2>\n" +
    "    <p>Sails makes it easy to build custom, enterprise-grade Node.js apps. It is designed to emulate the familiar MVC pattern of frameworks like Ruby on Rails, but with support for the requirements of modern apps: data-driven APIs with a scalable, service-oriented architecture. </p>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-lg-12\">\n" +
    "        <p class=\"text-align-center\">Made with love by <a href=\"http://twitter.com/SharePointOscar\" target=\"_blank\">@SharePointOscar</a> and <a href=\"http://twitter.com/jrtgtz\" target=\"_blank\">@jrtgtz</a></p>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("messages/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("messages/index.tpl.html",
    "<!--<style>\n" +
    "body {\n" +
    "padding: 10px !important;\n" +
    "}\n" +
    "\n" +
    ".ng-table-rowselected tr {\n" +
    "    cursor: pointer;\n" +
    "}\n" +
    ".emp{\n" +
    " background-color: #ffff00 ;\n" +
    " color: lightcoral;\n" +
    "}\n" +
    ".ng-table .plus, .ng-table .minus {\n" +
    "font-weight: bold;\n" +
    "padding-left: 18px;\n" +
    "position: relative;\n" +
    "}\n" +
    ".ng-table .plus:before, .ng-table .minus:before {\n" +
    "content:\"\";\n" +
    "border-width: 4px;\n" +
    "border-style:solid;\n" +
    "left: 8px;\n" +
    "top: 50%;\n" +
    "position: absolute;\n" +
    "margin-top: -2px;\n" +
    "}\n" +
    ".ng-table .plus {\n" +
    "color: green;\n" +
    "}\n" +
    ".ng-table .plus:before {\n" +
    "border-color: green;\n" +
    "border-top:none;\n" +
    "border-left:4px solid transparent;\n" +
    "border-right:4px solid transparent;\n" +
    "}\n" +
    ".ng-table .minus {\n" +
    "color: red;\n" +
    "}\n" +
    ".ng-table .minus:before {\n" +
    "border-color: red;\n" +
    "border-bottom:none;\n" +
    "border-left:4px solid transparent;\n" +
    "border-right:4px solid transparent;\n" +
    "}\n" +
    ".my-toggle-animation {\n" +
    "    -webkit-transition:0.5s linear all;\n" +
    "    transition:0.5s linear all;\n" +
    "\n" +
    "    background:white;\n" +
    "    padding:10px;\n" +
    "    border:1px solid black;\n" +
    "    color:black;\n" +
    "}\n" +
    "\n" +
    ".my-toggle-animation.disabled {\n" +
    "    background:grey;\n" +
    "    color:#555;\n" +
    "    border-color:#555;\n" +
    "}\n" +
    "\n" +
    ".animate-enter,\n" +
    ".animate-leave\n" +
    "{\n" +
    "    -webkit-transition: 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n" +
    "    -moz-transition: 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n" +
    "    -ms-transition: 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n" +
    "    -o-transition: 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n" +
    "    transition: 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n" +
    "    position: relative;\n" +
    "    display: block;\n" +
    "}\n" +
    "\n" +
    ".animate-enter.animate-enter-active,\n" +
    ".animate-leave {\n" +
    "    opacity: 1;\n" +
    "    top: 0;\n" +
    "    height: 30px;\n" +
    "}\n" +
    "\n" +
    ".animate-leave.animate-leave-active,\n" +
    ".animate-enter {\n" +
    "    opacity: 0;\n" +
    "    top: -50px;\n" +
    "    height: 0px;\n" +
    "}\n" +
    "</style>-->\n" +
    "\n" +
    "</br>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<h2>Messages</h2>\n" +
    "<!--<span ng-if=\"currentUser.role=='4'\" class=\"animate-if\">-->\n" +
    " <!--<h3> user: {{currentUser.first_name}} role: {{currentUser.role}}    </h3>-->\n" +
    "<!--</span>-->\n" +
    "\n" +
    "<p ng-show=\"!currentUser\"><a href=\"/register\">Register</a> to post a message!</p>\n" +
    "<div class=\"container\" ui-view=\"message\">\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-7\">\n" +
    "        <form role=\"form\" ng-submit=\"createMessage(newMessage)\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"messageTitle\">Your Message <i class=\"fa fa-comments\"></i></label>\n" +
    "                <input type=\"text\" ng-model=\"newMessage.title\" class=\"form-control\" id=\"messageTitle\"\n" +
    "                       ng-disabled=\"!currentUser\">\n" +
    "\n" +
    "                <label for=\"messageDate\">Date/Time  </label>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-4\">\n" +
    "                        <p class=\"input-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" datepicker-popup=\"EEE MM/dd/yyyy\"\n" +
    "                                   ng-model=\"newMessage.date\" is-open=\"opened\" min=\"minDate\" max=\"'2015-06-22'\"\n" +
    "                                   datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\"\n" +
    "                                   ng-required=\"true\" close-text=\"Close\"/> <button class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"fa fa-calendar\"></i></button>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-6\">\n" +
    "\n" +
    "                    <button class=\"btn btn-sm btn-info\" ng-click=\"today()\">Today</button>\n" +
    "                    <button class=\"btn btn-sm btn-danger\" ng-click=\"clear()\">Clear</button>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <hr/>\n" +
    "           </div>\n" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser || !newMessage.title\">Submit\n" +
    "            </button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-12\">\n" +
    "\n" +
    "        <button ng-click=\"tableParams.sorting({})\" class=\"btn btn-default pull-right\">Clear sorting</button>\n" +
    "        <p><strong>Sorting:</strong> {{tableParams.sorting()|json}}\n" +
    "\n" +
    "        <table ng-table=\"tableParams\" class=\"table\">\n" +
    "            <tr ng-repeat=\"message in  $data\">\n" +
    "\n" +
    "\n" +
    "                <td data-title=\"'title'\" sortable=\"'title'\">\n" +
    "                    <span ng-class=\"{ 'fa fa-info-circle': todo.title == '666','fa fa-dot-circle-o': todo.title != '666' }\">&nbsp; {{ message.title}}</span>\n" +
    "                </td>\n" +
    "                <td sortable=\"'date'\" data-title=\"'date'\">\n" +
    "                    {{message.date |  date : format }}\n" +
    "                </td>\n" +
    "\n" +
    "\n" +
    "                <td sortable=\"'username'\" ng-show=\"currentUser.role==='4'\" data-title=\"'username'\">\n" +
    "                {{message.user.username  }}/ {{message.user.role}}\n" +
    "\n" +
    "                </td>\n" +
    "                <td sortable=\"'status'\" data-title=\"'status'\">\n" +
    "                    {{message.status  }} {{stats[message.status].name}}\n" +
    "                </td>\n" +
    "\n" +
    "\n" +
    "                <td data-title=\"'chg status2'\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary btn-xs\" ng-click=\"fetchMessage(message)\"\n" +
    "                            ng-show=\"currentUser.role ==='4'\"><i class=\"fa fa-exchange\"></i></button>\n" +
    "                </td>\n" +
    "                <td data-title=\"'chg status3'\">\n" +
    "                    <button type=\"button\" class=\"btn btn-success btn-xs\" ng-click=\"fetchedMessage(message)\"\n" +
    "                            ng-show=\"currentUser.role ==='4'\"><i class=\"fa fa-flag-checkered\"></i></button>\n" +
    "                </td>\n" +
    "                <td data-title=\"'trash'\">\n" +
    "                    <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyMessage(message)\"\n" +
    "                            ng-show=\"currentUser.role =='4' || currentUser.id == message.user.id\"><i class=\"fa fa-trash-o\"></i></button>\n" +
    "                </td>\n" +
    "\n" +
    "\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "\n" +
    "    </div>\n" +
    "   <!-- <div class=\"col-md-12\">\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "        <pre>\n" +
    "        $state = {{$state.current.name}}\n" +
    "        $stateParams = {{$stateParams}}\n" +
    "        </pre>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    </div>-->\n" +
    "</div>");
}]);

angular.module("todos/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("todos/index.tpl.html",
    "<h2>Todo's</h2>\n" +
    "<p>Open this page in two browsers and see how easy Sails.js makes realtime applications!</p>{{currentUser.role}}\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <form role=\"form\" ng-submit=\"createTodo(newTodo)\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"todoTitle\">Your Todo</label>\n" +
    "                <input type=\"text\" ng-model=\"newTodo.title\" class=\"form-control\" id=\"todoTitle\" >\n" +
    "            </div>\n" +
    "            <!--<button type=\"submit\" class=\"btn btn-primary\">Submit</button>-->\n" +
    "            <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser\" >Submit\n" +
    "            </button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <!--<div class=\"col-md-8\">-->\n" +
    "        <!--<h3>All Todos</h3>-->\n" +
    "        <!--<ul class=\"form-group\">-->\n" +
    "            <!--<li class=\"form-control\" ng-repeat=\"todo in todos\">{{todo.title}} <b>by</b> {{todo.user.username }}, <span am-time-ago=\"todo.updatedAt\"></span> - <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyTodo(todo)\"><i class=\"fa fa-trash-o\"></i></button></li>-->\n" +
    "        <!--</ul>-->\n" +
    "    <!--</div>-->\n" +
    "    <div class=\"col-md-12\">\n" +
    "\n" +
    "        <button ng-click=\"tableParams.sorting({})\" class=\"btn btn-default pull-right\">Clear sorting</button>\n" +
    "        <p><strong>Sorting:</strong> {{tableParams.sorting()|json}}\n" +
    "\n" +
    "        <table ng-table=\"tableParams\" class=\"table\">\n" +
    "            <tr ng-repeat=\"todo in  $data\">\n" +
    "\n" +
    "\n" +
    "                <td data-title=\"'title'\" sortable=\"'title'\">\n" +
    "                    <span ng-class=\"{ 'fa fa-info-circle': todo.title == '666','fa fa-dot-circle-o': todo.title != '666' }\">&nbsp; {{ todo.title}}</span>\n" +
    "                </td>\n" +
    "                <td  data-title=\"'isComplete'\" sortable=\"'isComplete'\">\n" +
    "                    {{todo.isComplete }}\n" +
    "                </td>\n" +
    "                <td sortable=\"status\" data-title=\"'status'\">\n" +
    "                    {{todo.status  }} {{stats[todo.status].name}}\n" +
    "                </td>\n" +
    "                <td  data-title=\"'InProgress'\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary btn-xs\" ng-click=\"fetchTodo(todo)\"\n" +
    "                            ng-show=\"currentUser.id === todo.user.id\"><i class=\"fa fa-exchange\"></i></button>\n" +
    "                </td >\n" +
    "                <td data-title=\"'AlmostComplete'\">\n" +
    "                    <button type=\"button\" class=\"btn btn-warning btn-xs\" ng-click=\"fetchedTodo(todo)\"\n" +
    "                            ng-show=\"currentUser.id === todo.user.id\"><i class=\"fa fa-flag-checkered\"></i></button>\n" +
    "                </td>\n" +
    "                <td data-title=\"'Finished'\">\n" +
    "                    <button type=\"button\" class=\"btn btn-success btn-xs\" ng-click=\"finishTodo(todo)\"\n" +
    "                            ng-show=\"currentUser.id === todo.user.id\"><i class=\"fa fa-graduation-cap\"></i></button>\n" +
    "                </td>\n" +
    "                <td data-title=\"'Cancel'\">\n" +
    "                    <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyTodo(todo)\"\n" +
    "                            ng-show=\"currentUser.id === todo.user.id\"><i class=\"fa fa-trash-o\"></i></button>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("users/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/index.tpl.html",
    "<h2>users's</h2>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-md-12\">\n" +
    "\n" +
    "\n" +
    "        <p><strong>Sorting:</strong> {{tableParams.sorting()|json}}\n" +
    "\n" +
    "        <table ng-table=\"tableParams\" class=\"table\">\n" +
    "            <tr ng-repeat=\"user in  $data\">\n" +
    "\n" +
    "\n" +
    "                <td data-title=\"'username'\" sortable=\"'username'\">\n" +
    "                    <span ng-class=\"{ 'fa fa-info-circle': user.title == '666','fa fa-dot-circle-o': user.username != '666' }\"> {{ user.username}}</span>\n" +
    "                </td>\n" +
    "                <td  data-title=\"'email'\" sortable=\"'email'\">\n" +
    "                    {{user.email }}\n" +
    "                </td>\n" +
    "\n" +
    "                <td  data-title=\"'first_name'\" sortable=\"'first_name'\">\n" +
    "                    {{user.first_name }}\n" +
    "                </td>\n" +
    "\n" +
    "                <td  data-title=\"'role'\" sortable=\"'role'\">\n" +
    "                    {{user.role }}\n" +
    "                </td>\n" +
    "\n" +
    "\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);
