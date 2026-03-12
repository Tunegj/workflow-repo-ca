# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - navigation [ref=e4]:
        - link "Logo" [ref=e6] [cursor=pointer]:
          - /url: /
        - generic [ref=e7]:
          - link "Home" [ref=e8] [cursor=pointer]:
            - /url: /
          - link "Login" [ref=e9] [cursor=pointer]:
            - /url: /login
          - link "Register" [ref=e10] [cursor=pointer]:
            - /url: /register
  - main [ref=e11]:
    - generic [ref=e12]:
      - heading "Login" [level=1] [ref=e13]
      - alert [ref=e15]: Invalid email or password
      - group [ref=e17]:
        - textbox "Email" [ref=e19]: tongje04878@stud.noroff.no
        - textbox "Password" [ref=e21]: MataLubb2020
        - button "Login" [ref=e22] [cursor=pointer]
```