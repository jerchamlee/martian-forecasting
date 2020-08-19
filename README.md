# martian-forecasting

My P1 repo for General Assembly SEI course

# Project Overview

## Project Name

Martian Forecasting

## Project Description

The Martian Forecasting app displays information about weather patterns on Mars. The information on display is derived from data collected by NASAs InSight rover which is currently exploring the Red Planet.

## API and Data Sample

[InSight Mars Weather Service API](https://api.nasa.gov/insight_weather/?api_key=xiJjadwGqm6JsIw4X5ePFHM0We8K9ePJ7i7cKsmz&feedtype=json&ver=1.0)

Sample JSON:

```json
		{
		605: {
		AT: {
		av: -65.65,
		ct: 235348,
		mn: -92.69,
		mx: -18.378
		},
		First_UTC: "2020-08-08T20:21:14Z",
		HWS: {
		av: 8.277,
		ct: 117544,
		mn: 1.8519999999999999,
		mx: 22.528000000000002
		},
		Last_UTC: "2020-08-09T21:00:48Z",
		PRE: {
		av: 790.36,
		ct: 158556,
		mn: 756.8086,
		mx: 811.4683
		},
		Season: "summer",
		WD: {
		0: {
		compass_degrees: 0,
		compass_point: "N",
		compass_right: 0,
		compass_up: 1,
		ct: 202
		},
		9: {
		compass_degrees: 202.5,
		compass_point: "SSW",
		compass_right: -0.382683432365,
		compass_up: -0.923879532511,
		ct: 600
		},
		10: {
		compass_degrees: 225,
		compass_point: "SW",
		compass_right: -0.707106781187,
		compass_up: -0.707106781187,
		ct: 3574
		},
		11: {
		compass_degrees: 247.5,
		compass_point: "WSW",
		compass_right: -0.923879532511,
		compass_up: -0.382683432365,
		ct: 1389
		},
		12: {
		compass_degrees: 270,
		compass_point: "W",
		compass_right: -1,
		compass_up: 0,
		ct: 15064
		},
		13: {
		compass_degrees: 292.5,
		compass_point: "WNW",
		compass_right: -0.923879532511,
		compass_up: 0.382683432365,
		ct: 61458
		},
		14: {
		compass_degrees: 315,
		compass_point: "NW",
		compass_right: -0.707106781187,
		compass_up: 0.707106781187,
		ct: 32615
		},
		15: {
		compass_degrees: 337.5,
		compass_point: "NNW",
		compass_right: -0.382683432365,
		compass_up: 0.923879532511,
		ct: 2642
		},
		most_common: {
		compass_degrees: 292.5,
		compass_point: "WNW",
		compass_right: -0.923879532511,
		compass_up: 0.382683432365,
		ct: 61458
		}
		}
		}
```

## Wireframes

[Martian Forcasting Wireframe](https://wireframe.cc/qeJsDp)


#### MVP

I am going to use the folowing data: temperature, wind speed, and pressure, along with their respective dates and times.

Display Martian weather information

Display current Earth date 

Have a picture of Mars displayed on the page (Mars with a rover on it if I can find one)

I need to write a paragraph to that inrtroduces the page and gives a simple explanation of whats going on on the page




#### PostMVP

 I would like for the app to auto-update when new data is recieved from InSight and posted by NASA. Possibly in 7 day increments, or Sol increments.

Display Earth days to Mars sols conversion somehow (and Mars->Earth conversions of any other relevant data the app is presenting). 

Maybe display data for mars sols and data from the correlating days here on earth(or just a similar timeframe that correlates with the respective Martian timeframe)

Display current Martian date (sol #) 


## Project Schedule


| Day          | Deliverable                                        | Status     |
| ------------ | -------------------------------------------------- | ---------- |
| August 14-16 | Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete |
| August 17    | Project Approval                                   | Incomplete |
| August 18    | Core Application Structure (HTML, CSS, etc.)       | Incomplete |
| August 19    | Initial Clickable Model                            | Incomplete |
| August 20    | MVP                                                | Incomplete |
| August 21    | Presentations                                      | Incomplete |

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix. Link this image in a similar manner to your wireframes

## Timeframes

| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Adding Form      |    H     |      3hrs      |    3.5hrs     |   3.5hrs    |
| Working with API |    H     |      3hrs      |    2.5hrs     |   2.5hrs    |
| Total            |    H     |      6hrs      |     5hrs      |    5hrs     |

## Code Snippet

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
Currently no changes.
