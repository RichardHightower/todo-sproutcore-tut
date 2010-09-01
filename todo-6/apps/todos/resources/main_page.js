// ==========================================================================
// Project:   Todos - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Todos */

// This page describes the main user interface for your application.  
Todos.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'middleView topView bottomView'.w(),
    
    topView: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 36 },
      childViews: 'labelView addButton'.w(),
      anchorLocation: SC.ANCHOR_TOP,
      
      labelView: SC.LabelView.design({
        layout: { centerY: 0, height: 24, left: 8, width: 200 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value:   'Todos'
      }),
      
      addButton: SC.ButtonView.design({
        layout: { centerY: 0, height: 24, right: 12, width: 100 },
        title:  "Add Task",
        target: "Todos.tasksController",
        action: "addTask"
      })
    }),
    
    middleView: SC.SplitView.design({
        layout: {
            left: 0,
            top: 36,
            right: 0,
            bottom: 32
        },
        layoutDirection: SC.LAYOUT_HORIZONTAL,
        autoresizeBehavior: SC.RESIZE_TOP_LEFT,
	    defaultThickness: 0.8,
        topLeftView: SC.ScrollView.design({
	      hasHorizontalScroller: NO,
	      layout: { top: 36, bottom: 32, left: 0, right: 0 },
	      backgroundColor: 'white',

	      contentView: SC.ListView.design({
	        contentBinding: 'Todos.tasksController.arrangedObjects',
	        selectionBinding: 'Todos.tasksController.selection',
	        contentValueKey: "description",
	        contentCheckboxKey: "isDone",
	        rowHeight: 21,
	        canEditContent: YES,
	        canDeleteContent: YES,

	        target: "Todos.tasksController",
	        action: "toggleDone"
	      })
	    }),
	    topLeftMinThickness: 150,
	    topLeftMaxThickness: 250,
        dividerView: SC.SplitDividerView.design({
            layout: {}
        }),
        bottomRightView: SC.LabelView.design({
	        textAlign: SC.ALIGN_CENTER,
	        valueBinding: "Todos.tasksController.summary"
	      }),
    }),
    
    bottomView: SC.ToolbarView.design({
      layout: { bottom: 0, left: 0, right: 0, height: 32 },
      childViews: 'summaryView'.w(),
      anchorLocation: SC.ANCHOR_BOTTOM,
      
      summaryView: SC.LabelView.design({
        layout: { centerY: 0, height: 18, left: 20, right: 20 },
        textAlign: SC.ALIGN_CENTER,
        valueBinding: "Todos.tasksController.summary"
      })
    })
  })

});
