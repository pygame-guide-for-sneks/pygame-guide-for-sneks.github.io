<b>Guide to Getting Started With Contributing:</b>  
Due to the custom theme provided by GitHub Pages, you're going to need to head on over to <a href="https://jekyllrb.com/docs/installation/">Jekyll</a> and get it installed. Take note of the version of Ruby that you've installed. If you already have Ruby installed and need to know what version, in your terminal just use `ruby -v`.

After you have Jekyll installed, you need to create your fork of the repo and a clone of your fork. First thing you should do is fork this repository by clicking the `Fork` button in the top right of the screen (at least on desktop) and it should create a forked repository in your personal repositories. Take note of what it's called.

Now you should open a terminal and `cd` to the directory in which you want the local copy of your fork to be. Once you've done this, you should run `git clone https://github.com/{your-username}/{whatever-the-fork-is-called}` and then `cd` into that directory.

Now you should run `bundle init` and a Gemfile should be generated. Replace the contents of the Gemfile with this:

```
source "https://rubygems.org"
gem "github-pages"
gem "webrick" # only use this if you're using a version of Ruby >= 3.0.0
```

Now you should run `bundle` to install the appropriate gems then `bundle exec jekyll serve` to host the files locally on `localhost:4000`. Adding the `--livereload` flag at the end of the command will allow the server to automatically update whenever you have made a change to your copy of the files.

Now is the time to make whatever changes you want to make. Make the changes (hopefully you've said what you're doing), add the files and commit them to your personal fork and then push them to the fork. Now you make a PR to merge into this repository.