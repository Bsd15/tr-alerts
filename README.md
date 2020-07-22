# TR-Alerts

Simple responsive alerts for react made with tailwind css and hence the name tr-alerts (tailwindcss react - alerts).

**No additional dependencies required**

- [TR-Alerts](#tr-alerts)
  - [Steps to use](#steps-to-use)
  - [Documentation](#documentation)
    - [TRAlert](#tralert)
    - [useAlert](#usealert)
      - [showAlert](#showalert)

## Steps to use

1. Install the package

   ```
   npm i tr-alerts
   or
   yarn add tr-alert
   ```

2. Import the component and call it anywhere you like(Preferebly only once).

   ```js
   import React from 'react';
   import { TRAlert } from 'tr-alerts';

   function App() {
   	return (
   		<div>
   			Hello World
   			<TRAlert />
   		</div>
   	);
   }
   ```

3. Import the **useAlert** hook where ever required and call it. It will return a **showAlert** function which can be used to trigger the alert.
   ```js
   import React from 'react';
   import { useAlert } from 'tr-alerts';
   function someComponent() {
   	const showAlert = useAlert();
   	return (
   		<button onClick={() => showAlert('Heading', 'Some Message', 'success')}>
   			Trigger Alert
   		</button>
   	);
   }
   ```
   And thats it. Where ever you want to call/trigger the alert, simply call the useAlert hook to access the function and call it with neccessary arguments.

## Documentation

### TRAlert

The alert component which is used to render the alert. It does not take any props.

```js
import { TRAlert } from 'tr-alerts';
<TRAlert />;
```

Place the component anywhere you like.

It is **recommended** to call it **_only once_** in your entire app. As the trigger function set's the given values for all the alerts, placing multiple TRAlert components will trigger multiple alerts with same data which is unwanted behaviour.

### useAlert

The hook that is used to get the **showAlert** function that is used to trigger the alert.

The hook itself does'nt take any arguments. It simply return a function.

#### showAlert

The function returned by useHook. It takes the following params.

|                    Param                     | Accepted Data Type |                                                                                         Description                                                                                          |
| :------------------------------------------: | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                   heading                    |       string       |                                                        The heading to be displayed in the alert. Usually a quick summary of the alert                                                        |
|                   message                    |       string       |                                               The message to be displayed by the alert. If the message is too long, a scroll bar will appear.                                                |
| alertType ( optional, default to "primary" ) |       string       | Modifies the border color of the alert indicating the alert type. Acceptable values are "primary", "info", "success", "danger". primary - blue; info - yello; success - green; danger - red; |
|              timeout (optional)              |       number       |                           Set a timeout period after which the alert automatically closes. If not specified, then the alert wont close unless closed by the user.                            |

**Example usage**

The below example shows the usage of useAlert hook and calling the showAlert function with various settings.

```js
import React from 'React';
import { useAlert } from 'tr-alert';
function someFunction() {
	const showAlert = useAlert();
	return (
		<div>
			<button
				className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
				onClick={() =>
					showAlert('Alert!!', 'This is the default type of alert.', 'primary')
				}
			>
				Show Primary Alert
			</button>
			<button
				className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded"
				onClick={() =>
					showAlert('Info!!', 'This is to indicate info type.', 'info')
				}
			>
				Show Info Alert
			</button>
			<button
				className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
				onClick={() =>
					showAlert('Success!!', 'This is to indicate success type', 'success')
				}
			>
				Show Success Alert
			</button>
			<button
				className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
				onClick={() =>
					showAlert(
						'Error!!',
						'This is to indicate danger or error type.',
						'danger'
					)
				}
			>
				Show Danger Alert
			</button>
			<button
				className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
				onClick={() =>
					showAlert(
						'Temporary Alert!!',
						'This is to trigger temporary alert',
						'danger',
						1000
					)
				}
			>
				Show Temporary Alert
			</button>
		</div>
	);
}
```
