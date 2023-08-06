// import React, { Component } from 'react';

// type PropsType = {
//   test: string;
// };

// class TestComponent extends Component<
//   PropsType,
//   { pay: number; count: number; test: string }
// > {
//   constructor(props: PropsType) {
//     super(props);

//     this.state = {
//       pay: 8000,
//       count: 1,
//       test: props.test,
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       pay: 7000,
//     });
//     this.fetchData(this.state.count);
//   }

//   componentWillUnmount(): void {}

//   fetchData = async (id: number) => {
//     try {
//       const res = await fetch(
//         `https://jsonplaceholder.typicode.com/todos/${id}`
//       );
//       if (!res) {
//         throw new Error('Failed to fetch');
//       }
//       const data = await res.json();
//       this.setState({
//         test: data.title,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   componentDidUpdate(
//     prevProps: Readonly<PropsType>,
//     prevState: Readonly<{ pay: number; count: number; test: string }>
//   ): void {
//     if (prevState.count !== this.state.count) {
//       this.fetchData(this.state.count);
//     }
//   }

//   render() {
//     return (
//       <>
//         <p className='text-white text-2xl'>{this.state.test}</p>;
//         <p className='text-white'>{this.state.pay}</p>
//         <p className='text-white'>{this.state.count}</p>
//         <button className='text-white' onClick={this.increment}>
//           Increment
//         </button>
//       </>
//     );
//   }
// }

// export default TestComponent;
