<b>Setting Up a Godbolt Python Interpreter Embed</b>
<hr>
Go to <a href="https://www.godbolt.org/">godbolt</a>. You should see two panes where the left pane is some C++ code and the right pane is assembly.

In the left pane, there is a dropdown to change languages. Change it to the appropriate language (Python in this case). Note that the code and the right pane automatically updated to python and python bytecode respectively. Now close the right pane.

In the remaining pane, at the top left is an `Add new` dropdown. Select `Execution only` and a new tab should appear in the current pane called `Executor Python #insert some other stuff`. Click that tab and drag it to the right edge of the window and drop it in so that you now have 2 panes again.

Now modify the python code on the left to be whatever code you want the particular embed to default to. After that, you should see a `Share` dropdown in the top right of the page. Click it and there should be an `Embed in iframe` option. Clicking that will open a popup with a couple of options and a long iframe tag. Click on the clipboard icon to copy it, then go paste it in your html wherever you want it. To match our default styling, you should load `styles/embed.css` in your `<head>` and give the `iframe` a class of `python-embed`.

<hr>

<b>Setting Up a Replit Python Interpreter Embed w/Pygame</b>
<hr>

Go to <a href="https://replit.com">Replit</a>. Log in to the account that will host the repl (organization members should sign into Replit with the organization Google account) and under "My Repls", click the Create button. In the dropdown, select the "Pygame" template, make a descriptive title for it, and create the Repl. Verify things are set up properly by posting this boilerplate code into `main.py` and running the file:

```
import pygame

pygame.init()

screen = pygame.display.set_mode((500, 500))
clock = pygame.time.Clock()

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    screen.fill("red")
    pygame.display.flip()
    clock.tick(60)
```

If done correctly, a pygame window will appear on the right side of the repl filled with red. Now write the pygame code that you intend to write and run the repl to ensure that 
your code works properly. Now you have to construct your `<iframe>` for the embed. The template is `<iframe frameborder="0" width="100%" height="500px" src="REPL_URL?QUERY_PARAMETERS"></iframe>` where `REPL_URL` is the url of the repl you just created (so for the sample, it would be https://replit.com/@PygameGuide/Demo-Repl) and `QUERY_PARAMETERS` can take on a couple of values:

1) `?embed=true` declutters the repl's control buttons
2) `?lite=true` is more cluttered, but gives more control to the viewer

The default for this guide should be `?lite=true`. So, the correct `<iframe>` for the sample repl would be `<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@PygameGuide/Demo-Repl?lite=true"></iframe>` and it produces this embed:

<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@PygameGuide/Demo-Repl?lite=true"></iframe>

If you want to see what `?embed=true` yields, here it is:

<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@PygameGuide/Demo-Repl?embed=true"></iframe>

Now just put the `iframe` wherever it's needed in your code.
