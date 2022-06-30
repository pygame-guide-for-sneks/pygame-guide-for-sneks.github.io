<b>Setting Up a Godbolt Python Interpreter Embed</b>
<hr>
Go to <a href="https://www.godbolt.org/">godbolt</a>. You should see two panes where the left pane is some C++ code and the right pane is assembly.

In the left pane, there is a dropdown to change languages. Change it to the appropriate language (Python in this case). Note that the code and the right pane automatically updated to python and python bytecode respectively. Now close the right pane.

In the remaining pane, at the top left is an `Add new` dropdown. Select `Execution only` and a new tab should appear in the current pane called `Executor Python #insert some other stuff`. Click that tab and drag it to the right edge of the window and drop it in so that you now have 2 panes again.

Now modify the python code on the left to be whatever code you want the particular embed to default to. After that, you should see a `Share` dropdown in the top right of the page. Click it and there should be an `Embed in iframe` option. Clicking that will open a popup with a couple of options and a long iframe tag. Click on the clipboard icon to copy it, then go paste it in your html wherever you want it.