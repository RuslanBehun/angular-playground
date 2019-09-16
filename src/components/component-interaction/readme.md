__Read Me__

##Component Interaction: 

For component interaction and passing data from one component to another you have second options:

1. Past data from parent to child with input binding (Input decorator @Input)

   1.1 Intercept input property changes with a setter
   1.2 Intercept input property changes with ngOnChanges
   
2. Parent listen for child event (Output decorator - @Output)

3. Parent interacts with child via _local variable_

4. Parent calls an @ViewChild() decorator

5. Via Services. Parent and child communicate via a services. 
   
####Description:
Let's create two components, one is **classes** in school and another is a class **pupils** and interact between them.   


//TODO: Transfer class name from parent component and sort pupils by class 
