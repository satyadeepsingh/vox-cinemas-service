package com.vox.api.data.migration;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import com.vox.api.data.Film;
import com.vox.api.data.repo.FilmRepo;

import lombok.extern.log4j.Log4j2;
import reactor.core.publisher.Flux;

/**
 * @author satyadeepsingh
 * Class to migrate data
 */
@Log4j2
@Component
public class DataSeeder implements ApplicationListener<ApplicationReadyEvent> {

	private final FilmRepo filmRepo;

	public DataSeeder(FilmRepo filmRepo) {
		super();
		this.filmRepo = filmRepo;
	}

	/**
	 * Initialize some data
	 */
	@Override
	public void onApplicationEvent(ApplicationReadyEvent event) {

		filmRepo.deleteAll() //
				.thenMany(Flux.just("FallOfTheRamGarh", "AManWithKnife", "GodOfThunder")
						.map(slug -> new Film(UUID.randomUUID().toString(), 
								slug, slug + ": A film ",
								LocalDateTime.now().minusYears(20L), 5, 25.20F, "INDIA",
								List.of("THRILLER", "ACTION", "COMEDY"), slug, List.of()))
						.flatMap(filmRepo::save))
				.thenMany(filmRepo.findAll()) //
				.subscribe(film -> log.info("adding " + film.toString()));

	}

}
