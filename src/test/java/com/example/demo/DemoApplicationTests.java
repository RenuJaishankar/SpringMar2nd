package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class DemoApplicationTests {
	DemoApplication application = new DemoApplication();

	@Test
	void contextLoads() {
	}

	@Test
	public void shouldReturnSum() {
		Integer x = 4;
		Integer y = 5;
		assertEquals(9, x + y);

	}

	@Test
	public void sampleTest() {
		Integer x = 4;
		Integer y = 5;
		assertEquals(9, x + y);

	}

//	@Test
//	public void sampleTest() {
//		assertEquals(3, application.returnsInteger(3));
//	}
}