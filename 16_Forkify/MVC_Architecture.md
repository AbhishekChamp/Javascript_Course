## COMPONENTS OF ANY ARCHITECTURE

There are 5 components in any architecture. They are,

1. **_Business Logic_**
2. **_State_**
3. **_HTTP Library_**
4. **_Application Logic (Router)_**
5. **_Presentation Logic (UI Layer)_**

#### BUSINESS LOGIC

> 1.  Code that **solves the actual business problem**
> 2.  Directly related to what business does and what it needs
> 3.  **Example**: Sending messages, storing transactions, calculating taxes etc.,

#### STATE

> 1. Essentially **stores all the data** about the application
> 2. Should be the **single source of truth**
> 3. UI should be kept in sync with the state
> 4. State libraries exist **(Example : Redux)**

#### HTTP LIBRARY

> 1. Responsible for making and receiving **AJAX requests**
> 2. Optional but almost always necessary in real-world apps

#### APPLICATION LOGIC (ROUTER)

> 1. Code that is only concerned about the **implementation of application itself**
> 2. Handles navigation and UI events

#### PRESENTATION LOGIC (UI LAYER)

> 1. Code that is concerned about the **visible part** of the application
> 2. Essentially displays application state

**_The state and presentaion logic (ui layer) always needs to be in sync_**

## THE MODEL-VIEW-CONTROLLER (MVC) ARCHITECTURE

There are 5 components,

1. **_Web_**
2. **_Model_**
3. **_Controller_**
4. **_View_**
5. **_User_**

#### WEB

> Data flows from **model** to web and web to model

#### MODEL

> 1. It consists of **Business Logic, State, HTTP Library**
> 2. The data from model goes to web and from web it is passed to model and then to controller
> 3. It is connected with Controller for **function call and import**

#### CONTROLLER

> 1. It consists of **Application Logic**
> 2. It is a bridge between **model and views** (which don't know about one another)
> 3. Handles UI events and **dispatches task to model and view**
> 4. Data flows from model to controller and from controller to view
> 5. It receives it's function call and import from controller and then the function call goes to **model and view**

#### VIEW

> 1. It consists of **Presentation Logic**
> 2. Data flows from Controller to View and from View to User
> 3. It receives it's function call and import from Controller

#### USER

> 1. It passes the function call and import to Controller
> 2. It receives it's data from data flow
> 3. It is the part that the user sees.

### MVC FLOW

In MVC Architecture, the typical data flow along with function call and import is as follows,

> 1. The function call and import from the **user goes to the controller**
> 2. The function call from the **controller moves to model and view**
> 3. From **model data flows to web** and from **web to model**
> 4. Then data flows from **model to controller** and **controller to view**
> 5. From **View** data flows to the **User**
