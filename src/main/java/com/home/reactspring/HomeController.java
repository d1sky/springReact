package com.home.reactspring;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller // <1>
public class HomeController {

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

}