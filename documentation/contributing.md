<b>Guide to Getting Started With Contributing:</b>  
Due to the custom theme provided by GitHub Pages, you're going to need to head on over to [Jekyll]("https://jekyllrb.com/docs/installation/") and get it installed. Take note of the version of Ruby that you've installed. If you already have Ruby installed and need to know what version, in your terminal just use `ruby -v`.

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

<b>Troubleshooting! (Because of course there are problems sometimes)</b>
These are solutions to specific problems that our contributors have had when following the above directions. If these steps don't solve your problems, you can open an issue and we may be able to help, but no guarantees. If you do run into a problem and the problem or solution is not detailed here, let us know so we can update these steps!

1) If everything works properly except the `--livereload` flag and using it spits out an error containing something that says approximately `Unable to load the EventMachine C extension`, try this sequence of commands while you're `cd`'d into the root directory of the project:
```
gem uninstall eventmachine # (select all versions if prompted)
gem install eventmachine --platform ruby
```

2) If you're on Windows 10 and the system language is set to something non-English and running `bundle -v` or `jekyll -v` spits out errors containing `invalid byte sequence in UTF-8 (ArgumentError)`, then there's a chance that the somewhere some non-UTF-8 characters snuck into your filepaths. The solution that worked for us was to use a feature of Windows 10 that's still in Beta to force the use of UTF-8 in Windows. Note: there is no express or implied warranty that these steps won't come with side-effects. To understand what these steps are doing, check out [this StackOverflow answer](https://stackoverflow.com/a/57134096/14387651). Also note that these steps are written in English and if you need them, there's a good chance that you'll need to do some translating for the menu options to click on.
    1) Open windows search and search for `intl.cpl`. This will launch a Control Panel page called `Region`.
    2) Go to the `Administrative` tab
    3) Click on `Change System Locale`
    4) There should be a checkbox that roughly translates to `Beta: Use Unicode UTF-8 for worldwide language support`. Click it and click `Ok`.
    5) If you can click `Apply`, do so. Then click `Ok`. You can hopefully run bundle and jekyll commands now.
    Note: At least in PowerShell, after these steps non-UTF-8 characters in paths don't seem to render correctly anymore, but command prompt seems to display them fine.