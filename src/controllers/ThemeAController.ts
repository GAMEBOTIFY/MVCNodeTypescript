class ThemeAController{
    defaultMethod()
    {
        return{
            text:`you're in this ${this.constructor.name} deafult method`
        };
    }
}

export = new ThemeAController();